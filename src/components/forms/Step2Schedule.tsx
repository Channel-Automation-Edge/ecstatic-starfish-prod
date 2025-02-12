"use client";
import React, { useContext, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { AppContext } from '@/context/AppContext';
import { Calendar } from '@/components/ui/calendar';
import { format, getDay } from 'date-fns';
import BlurFade from '@/components/ui/blur-fade';
import NavButtons from '../ui/navButtons';

interface Step2ScheduleProps {
  onNext: () => void;
  onReset: () => void;
  onBack: () => void;
}

// Define a type for the valid keys of the timeSlots object
type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

const Step2Schedule: React.FC<Step2ScheduleProps> = ({ onNext, onReset, onBack }) => {
  const appContext = useContext(AppContext);

  if (!appContext || !appContext.contractor || !appContext.services) {
    return null; // Handle the case where data is not loaded yet
  }

  const { form, setForm, contractor } = appContext;
  const [loading, setLoading] = useState<boolean>(false); // State to control spinner
  const [selectedDayTimeSlots, setSelectedDayTimeSlots] = useState<string[]>([]); // State to store time slots for the selected day

  // Updated time slots to use an object with days of the week as keys
  const defaultTimeSlots: Record<DayOfWeek, string[]> = {
    Monday: ['10:00', '13:00', '14:00', '15:00', '17:00', '18:00'],
    Tuesday: ['13:00', '14:00', '16:00', '17:00', '20:00'],
    Wednesday: ['11:00', '13:00', '14:00', '15:00', '18:00', '19:00'],
    Thursday: ['13:00', '14:00', '16:00', '17:00', '20:00'],
    Friday: ['11:00', '13:00', '14:00', '15:00', '18:00', '19:00'],
    Saturday: ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
    Sunday: [], // No time slots for Sunday
  };

  // Parse contractor.time_slots if it exists, otherwise use defaultTimeSlots
  const timeSlots: Record<DayOfWeek, string[]> = contractor.time_slots
    ? contractor.time_slots // Parse JSONB data
    : defaultTimeSlots;

  const formik = useFormik({
    initialValues: {
      date: form.date || '', 
      time: form.time || '',
    },
    validate: (values) => {
      const errors: { date?: string; time?: string } = {};
      if (!values.date) {
        errors.date = 'Date is required';
      }
      if (!values.time) {
        errors.time = 'Time is required';
      }
      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true); // Show spinner

      setForm((prevForm) => ({
        ...prevForm,
        date: values.date,
        time: values.time,
      }));

      setLoading(false); // Hide spinner
      onNext();
    },
  });

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      const formattedDate = format(date, 'yyyy-MM-dd');
      formik.setFieldValue('date', formattedDate);

      // Get the day of the week for the selected date
      const dayOfWeek = getDay(date);
      const days: DayOfWeek[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const selectedDay = days[dayOfWeek];

      // Set the time slots for the selected day
      setSelectedDayTimeSlots(timeSlots[selectedDay]);
    }
  };
  
  const [rawTime, setRawTime] = useState<string>('');

  // Function to convert 24-hour time to 12-hour time
  const convertTo12HourFormat = (time: string): string => {
    const [hour, minute] = time.split(':');
    const parsedHour = parseInt(hour, 10);
    const suffix = parsedHour >= 12 ? 'PM' : 'AM';
    const twelveHour = parsedHour % 12 || 12;
    return `${twelveHour}:${minute} ${suffix}`;
  };

  const handleTimeSelect = (time: string) => {
    setRawTime(time);
    formik.setFieldValue('time', time);
  };
  // Set initial time slots based on the current day
  useEffect(() => {
    const today = new Date();
    const dayOfWeek = getDay(today);
    const days: DayOfWeek[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[dayOfWeek];

    setSelectedDayTimeSlots(timeSlots[currentDay]);
  }, [timeSlots]);

  return (
    <div className="container-form">
      <NavButtons handleBack={onBack} handleReset={onReset} />
      <div className="max-w-xl mx-auto">
        <div className='flex justify-center text-center mb-8'>
          <div className="max-w-[40rem] text-center">
            <h1 className="heading-form">
            Pick a  
            <span className="text-accentColor"> date and time</span> that works for you
            </h1>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="mt-4 rounded-lg px-4 py-4 shadow-lg sm:px-6 sm:py-4 lg:px-8 bg-white">
            <BlurFade delay={0.1} duration={0.4} blur='0px' inView yOffset={0} className="flex-grow">
              <h2 className="text-center mt-2 mb-4 text-xl font-semibold text-gray-800 dark:text-neutral-200">
                Select a date
              </h2>
              <div className="flex justify-center mb-4">
                <div className="rounded-lg small-stepper:border small-stepper:border-gray-300 small-stepper:p-4 small-stepper:shadow-xl sm:p-6 lg:p-8 small-stepper:bg-white">
                  <Calendar
                    mode="single"
                    selected={formik.values.date ? new Date(formik.values.date) : undefined}
                    onSelect={handleDateChange}
                    initialFocus
                    modifiers={{
                      disabled: [
                        { before: new Date() },
                        { from: new Date(), to: new Date(new Date().setDate(new Date().getDate() + 3)) },
                        { after: new Date(new Date().setDate(new Date().getDate() + 20)) },
                      ]
                    }}
                  />
                </div>
              </div>

              <h2 className="text-center mt-6 mb-4 text-xl font-semibold text-gray-800 dark:text-neutral-200">
                Select Time
              </h2>
              {selectedDayTimeSlots.length > 0 ? (
                <div
                  className="flex flex-wrap justify-center pb-2"
                  style={{ gap: '10px', marginTop: '15px', width: '100%' }}
                >
                  {selectedDayTimeSlots.map((time: string) => (
                    <button
                      key={time}
                      type="button"
                      className={`py-3 px-4 w-28 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-300  ${
                        rawTime === time ? 'bg-accentColor text-white border-accentColor hover:bg-accentColor' : 'bg-white text-gray-800 hover:bg-gray-100'
                      }`}
                      onClick={() => handleTimeSelect(time)}
                    >
                      {convertTo12HourFormat(time)}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-700 dark:text-neutral-200">
                  No time slots available for the selected date.
                </div>
              )}
              
              {formik.values.time && (
                <div className="mt-2 text-center text-gray-700 dark:text-neutral-200 hidden">
                  Selected Time: {formik.values.time}
                </div>
              )}
            </BlurFade>
          </div>
          <div className="mt-4 flex flex-col space-y-4 sticky bottom-4">
            <button
              type="submit"
              className={`w-full py-5 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent ${
                formik.values.date && formik.values.time
                  ? 'bg-accentColor text-white hover:bg-accentDark transform transition-transform'
                  : 'bg-gray-200 text-white cursor-not-allowed'
              }`}
              disabled={!formik.values.date || !formik.values.time}
            >
              {loading ? (
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2Schedule;
