"use client";
import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import {central} from '@/lib/supabaseClient';
import { Dialog, DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogClose,
  DialogTitle
} from '@/components/ui/dialog2';
import { Button } from '@/components/ui/button';
import ConfirmCheck from './icons/ConfirmCheck';
import IconComponent from '@/hooks/IconComponent';

interface InboundSummaryProps {
  onSchedule: () => void;
  onInfo: () => void;
  onSubmit: () => void;
}


const InboundSummary: React.FC<InboundSummaryProps> = ({onSchedule, onInfo, onSubmit }) => {
  const { form, setForm, user, contractor, selectedService, timezoneAbbr } = useAppContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [validAppointment, setValidAppointment] = useState<boolean>(false);

  // Check if form is valid
  useEffect(() => {
    // Check if all required fields are filled
    if (
      form.date &&
      form.time &&
      user.firstname &&
      user.lastname &&
      user.address1 &&
      user.city &&
      user.state &&
      user.zip &&
      user.email &&
      user.phone &&
      selectedService
    ) {
      setValidAppointment(true);
    } else {
      setValidAppointment(false);
    }
  }, [form, user, selectedService]);

  const payload = {
    user,
    form,
    contractor,
    selectedService,
    consent: {
      general: {
        description: 'By checking the box above, I provide my ESIGN and express written consent for {appContext.contractor.name} and its authorized partners to contact me at the phone number and email address I have provided in this form. This may include marketing communications sent using automated technology, such as calls, texts, or emails. I understand that this consent is not required to make a purchase.',
        value: form.generalOptIn,
      },
    },
  };

  const handleConfirmBooking = async () => {
		setLoading(true);

		try {
      const response = await fetch('https://hkdk.events/w8wqxy2op6oty4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to send appointments');
      }
    } catch (err) {
      console.error('Error sending appointments:', err);
    }

    document.getElementById("dialog")?.click();

	  // insert data into bookings table
		try {
			const { data, error } = await central
				.from('bookings')
				.insert([
					{
						firstname: user.firstname,
						lastname: user.lastname,
						email: user.email,
						phone: user.phone,
						address1: user.address1,
						address2: user.address2,
						city: user.city,
						state: user.state,
						zip: user.zip,
						user_ns: user.userNs,
						id: form.formId,
						service_specification: form.serviceSpecification,
						promo: form.promo,
						opt_in: form.generalOptIn,
						date: form.date,
						time: form.time,
						service_name: selectedService.name,
						service_id: selectedService.id,
            is_booked: true,
            timezone: form.timezone,
            contractor_id: contractor.id,
					},
				]);
	
			if (error) {
				console.error('Error inserting data:', error);
			} else {
				console.log('Data inserted successfully:', data);
        setLoading(false);
			}
		} catch (err) {
			console.error('Unexpected error:', err);
		}	
	};

  const formatDate = (dateString: string) => {
    // Split the stored yyyy-MM-dd format into components
    const [year, month, day] = dateString.split('-').map(Number);
    // Create a Date object using LOCAL time components
    const date = new Date(year, month - 1, day); // months are 0-based in JS
    
    return new Intl.DateTimeFormat('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };
  
  const formatTime = (timeString: any) => {
    // Split the time string into hours and minutes
    const [hourStr, minuteStr] = timeString.split(':');
    let hour = parseInt(hourStr, 10);
    const minutes = minuteStr || '00'; // Default to '00' if no minutes part
  
    // Determine AM or PM period
    const period = hour >= 12 ? 'PM' : 'AM';
  
    // Convert hour to 12-hour format
    if (hour === 0) {
      hour = 12; // Midnight case
    } else if (hour > 12) {
      hour -= 12; // Convert to 12-hour format
    }
  
    return `${hour}:${minutes} ${period}`;
  };


  const formatPhoneNumber = (phone: any) => {
    if (!phone || phone.length !== 10) {
      return phone;
    }
  
    const areaCode = phone.slice(0, 3);
    const centralOfficeCode = phone.slice(3, 6);
    const lineNumber = phone.slice(6);
  
    return `+1 (${areaCode}) ${centralOfficeCode}-${lineNumber}`;
  };

  const handleGeneralOptInChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setForm((prevForm) => ({
      ...prevForm,
      generalOptIn: isChecked,
    }));
  };

  const handleRedirect = () => {
    console.log('Redirecting to thank you page');
    onSubmit();
  };

  if (!selectedService || !user || !contractor) {
    return null;
  }

  return (
		<div>
			<div className="container-form">

				<div className="space-y-8">
					<div className='flex justify-center text-center'>
						<div className="max-w-[60rem] text-center">
              {validAppointment ? (
                <h1 className="section_header">
                  Almost There, {user.firstname}! <span className="text-accentColor">Confirm Your Appointment</span> Now
                </h1>
              ) : (
                <h1 className="section_header">
                  Hi, {user.firstname}! let's finish setting up your appointment
                </h1> )
              }
              <p className="section_description text-center mt-2 sm:mt-4">Please review the information below and click “Confirm Appointment” to finalize your booking</p>
            </div>
          </div>

					<div className="flex justify-center mt-10"> 
						<div className="flex flex-wrap gap-4 max-w-screen-lg w-full sm:px-8">
						<div className="flex flex-col gap-4 flex-grow min-w-[250px] w-[600px] max-w-[100%]">
								<div className="bg-white border border-gray-200 rounded-md">
									<div className="text-left mx-4 my-4">
										<div className="flex items-center">
										<div className="flex items-center text-yellow-500 mb-3">
                        <svg id="fi_9759344" enableBackground="new 0 0 32 32" height="24" viewBox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg"
                        className='text-yellow-500 h-5'>
                          <g>
                            <path d="m28.8 9-5.8-5.8c-.8-.8-1.8-1.2-2.9-1.2h-8.3c-1 0-2 .4-2.8 1.2l-5.8 5.8c-.8.8-1.2 1.8-1.2 2.9v8.3c0 1.1.4 2.1 1.2 2.8l5.8 5.8c.8.7 1.8 1.2 2.8 1.2h8.3c1.1 0 2.1-.4 2.8-1.2l5.9-5.9c.7-.8 1.2-1.8 1.2-2.8v-8.3c0-1-.4-2-1.2-2.8z" fill="#ffc107"></path>
                            <path d="m15.8 24.7c-2.3.1-1.9-3.9.3-3.4 2.3-.1 2 3.9-.3 3.4zm.2-5.5c-.6 0-.9-.3-.9-1l-.7-9.2c-.1-.9.6-1.7 1.5-1.8s1.7.6 1.8 1.5v.3l-.7 9.2c-.1.7-.4 1-1 1z" fill="#eee"></path>
                          </g>
                        </svg>
                        <p className="text-lg font-semibold ml-2">Pending Confirmation</p>
                      </div>
                    </div>
										<hr className='mb-4'></hr>
										<div className="flex items-center mb-4 ml-4 md:ml-8 min-w-52">
                    <div className="flex items-center">
                      <IconComponent name={selectedService.name} className="w-14 h-14" />
                      <div className="flex flex-wrap justify-between flex-grow">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-white pl-6 pr-4">
                          {selectedService.name} {form.serviceSpecification || "Service"}
                        </h3>
                      </div>
                    </div>
                    </div>
                    {/* Schedule */}
                    {/* <hr className='mb-4'></hr>
                    {form.promo }
                    <p className="text-sm font-semibold text-gray-800 mb-3">Promo</p> */}
                    <hr className='mb-4'></hr>
                    <div className='flex mb-3'>
                      <p className="text-sm font-semibold text-gray-800 ">Scheduled Date and Time</p>
                      <button onClick={onSchedule} className='ml-auto text-accentColor hover:text-accentDark'>Edit</button>
                    </div>
                    
                    {form.date && form.time ? (
                      <div className="flex flex-wrap justify-between my-4 w-auto bg-gray-100 rounded-md pt-2 pb-4 space-y-2">
                        <div className="flex items-center px-8 min-w-[200px] mt-2">
                          <img src="/images/calendar.svg" alt="Calendar" className="inline mr-2 h-5" />
                          <p className="text-base text-gray-800">{formatDate(form.date)}</p>
                        </div>

                        <div className="hidden sm:flex items-center px-8">
                          <img src="/images/clock.svg" alt="Clock" className="inline mr-2 h-5" />
                          <p className="text-base text-gray-800">{formatTime(form.time)}</p>
                          
                          {timezoneAbbr && ( 
                            <div className='flex items-center'>
                              <img src="/images/globe.svg" alt="Clock" className="inline ml-4 mr-2 h-5" />
                              <p className="text-base text-gray-800">{timezoneAbbr}</p>
                            </div>)}

                        </div>


                        <div className="flex items-center px-8 sm:hidden">
                          <img src="/images/clock.svg" alt="Clock" className="inline mr-2 h-5" />
                          <p className="text-base text-gray-800">{formatTime(form.time)}</p>
                        </div>
                        {timezoneAbbr && (
                          <div className="flex items-center px-8 sm:hidden">
                            <img src="/images/globe.svg" alt="Clock" className="inline mr-2 h-5" />
                            <p className="text-base text-gray-800">{timezoneAbbr}</p>
                          </div>
                        )}

                      </div>
                    ) : (
                      <div className="flex flex-wrap justify-between my-4 w-auto bg-red-100 rounded-md py-4">
                        <div className="flex items-center px-4 sm:px-8 min-w-[200px]">
                          <img src="/images/warning.svg" alt="warning" className="inline mr-2 h-5" />
                          <button onClick={onSchedule} className=" text-sm sm:text-base text-red-800 text-accentColor hover:text-red-900  ">Select Date and Time</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
								
							</div>

							<div className="flex-grow min-w-[250px] max-w-[100%] bg-white border border-gray-200 rounded-md h-auto">
								<div className='text-left mx-4 my-4'>
                  <div className="flex items-center mb-3">
                    <p className='text-lg font-semibold text-gray-800 '>Customer Information</p>
                    <button onClick={onInfo} className='ml-auto text-accentColor hover:text-accentDark'>Edit</button>
                  </div>
									<hr className='mb-4'></hr>
									<p className='text-base text-gray-800 mb-3'>
										<img src="/images/user.svg" alt="User" className="inline mr-2 h-5" />
										{user.firstname} {user.lastname}
									</p>
									<p className='text-base text-gray-800 mb-3'>
										<img src="/images/mail.svg" alt="Email" className="inline mr-2 h-5 " />
										{user.email}
									</p>
									<p className='text-base text-gray-800 item-center mb-3'>
										<img src="/images/telephone.svg" alt="Phone" className="inline mr-2 h-5" />
										{formatPhoneNumber(user.phone)}
									</p>
									<p className='text-base text-gray-800 mb-3'>
										<img src="/images/home.svg" alt="Location" className="inline mr-2 h-5" />
										{user.address2 ? `${user.address1}, ${user.address2}` : `${user.address1}`}
									</p>
									<p className='text-base text-gray-800 mb-3'>
										<img src="/images/city.svg" alt="Location" className="inline mr-2 h-5" />
										{user.city}
									</p>
									<p className='text-base text-gray-800 mb-3'>
										<img src="/images/location.svg" alt="Location" className="inline mr-2 h-5" />
										{user.zip}, {user.state}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-4 pb-4 flex justify-center items-center sticky bottom-0 bg-gray-50">
            {validAppointment ? 
            (
              <div className="justify-center sm:mx-8 w-[960px]">
                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="generalOptIn"
                    name="generalOptIn"
                    checked={form.generalOptIn}
                    onChange={handleGeneralOptInChange}
                    className="size-4 rounded border-gray-300 text-accentColor focus:ring-accentColor"
                  />
                  <label htmlFor="generalOptIn" className="ml-4 block text-base text-gray-900 dark:text-gray-300">{!form.generalOptIn && <span className="text-red-500">* </span>}
                  Yes, I agree to receiving updates about my free assessment. I understand that I can opt-out anytime.
                  </label>
                </div>
                <button
                  onClick={handleConfirmBooking}
                  className={`mt-4 w-full py-5 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent ${
                    form.generalOptIn && validAppointment
                          ? 'bg-accentColor text-white hover:bg-accentDark transform transition-transform'
                          : 'bg-gray-200 text-white cursor-not-allowed'
                      }`}
                      disabled={loading || !form.generalOptIn || !validAppointment}  // Disable button if generalOptIn is not true
                >
                  {loading ? (
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  ) : (
                    'Confirm Appointment'
                  )}
                </button>
              </div>
            ) : (
              <div className="justify-center sm:mx-8 w-[960px]">
                <p className="text-center text-sm text-gray-600 dark:text-neutral-400 mt-4">
                It looks like some details are missing to finalize your appointment. Please click the "edit" on the section with missing details to continue setting it up. Your appointment is not confirmed until all details are complete
                </p>
              </div>
            )
          }

					</div>
				</div>
        <div className="mt-2 sm:mt-4 flex justify-center items-center">
          <div className="justify-center sm:mx-8 w-[960px]">
            {form.generalOptIn && (
              <div> 
                <div className="text-sm text-gray-600 dark:text-neutral-400">
                  By checking the box above, I provide my ESIGN and express written consent for {contractor.name} and its authorized partners to contact me at the phone number and email address I have provided in this form. This may include marketing communications sent using automated technology, such as calls, texts, or emails. I understand that this consent is not required to make a purchase.
                </div>
              </div>
            )}
          </div>
        </div>
			</div>
			<Dialog>
        <DialogTrigger asChild>
          <button id='dialog' className='hidden'></button>
        </DialogTrigger>
        <DialogTitle></DialogTitle>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className='items-center'>
						<ConfirmCheck />
            <h4 className='text-lg sm:text-xl font-semibold text-center py-1'>Awesome!</h4>
            <DialogDescription>
						Your booking has been confirmed, and you will receive updates shortly regarding your Free Assessment. We look forward to helping you bring your project to life.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild className='items-center'>
              <Button className='bg-accentColor hover:bg-accentDark w-full' onClick={handleRedirect}>OK</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
		</div> 
  );
};

export default InboundSummary;
