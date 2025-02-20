import IconComponent from '@/hooks/IconComponent'
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '@/context/AppContext';
import { useNavigate, useLocation } from 'react-router-dom';
import useClearFormState from '@/hooks/useClearFormState.tsx';
import useFormPersistence from '@/hooks/useFormPersistence';
import {central} from '@/lib/supabaseClient';

const STLHero = () => {
  const appContext = useContext(AppContext);
  
  if (!appContext) {
    return null;
  }

  const { form, setForm, user, contractor, selectedService, setSelectedService } = appContext;
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();
  const clearFormState = useClearFormState();
  const [, setCurrentStep, resetCurrentStep] = useFormPersistence('formStep', 2);
  const [slug, setSlug] = useState('');
  const params = new URLSearchParams(location.search);
  const serviceId = params.get('service');

  // update selected service if serviceId is set. fetch service from services table in supbase
  useEffect(() => {
    const fetchService = async () => {
      if (serviceId) {
        try {
          const { data, error } = await central
            .from('services')
            .select('*')
            .eq('id', serviceId)
            .single();
  
          if (error) {
            console.error('Error fetching service:', error);
          } else {
            setSelectedService(data);
          }
        } catch (err) {
          console.error('Unexpected error:', err);
        }
      }
      setLoading(false);
    }
    fetchService();
  }, [appContext.services, serviceId, setForm, location.search]);

  const formatDate = (dateString:any) => {
    // Split the date string into components
    const [year, month, day] = dateString.split('-');
  
    // Create a new Date object using local timezone
    const date = new Date(year, month - 1, day); // Month is 0-indexed
  
    // Format the date manually to ensure consistency
    return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date);
  };
  
  const formatTime = (timeString: string) => {
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

   // Function to append current URL parameters
   const navigateWithParams = (path: string) => {
    const currentParams = new URLSearchParams(location.search);
    navigate(`${path}?${currentParams.toString()}`);
  };

  const generateRandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  // set slug
  useEffect(() => {
    if (appContext && appContext.contractor) {
      setSlug(appContext.contractor.slug);
    }
  }, [appContext, appContext.contractor]);

  const handleButtonClick = () => {
    let formId = form.formId;

    // If formId is not set, create a new formId
    if (!formId) {
      resetCurrentStep();
      clearFormState();

      const dateTime = new Date().toISOString().replace(/[-:.T]/g, '').slice(0, 14); // YYYYMMDDHHMMSS format
      const randomString = generateRandomString(6);

      formId = `${contractor.id}-${dateTime}-${randomString}`;
      console.log('Generated formId:', formId);
      setSelectedService(selectedService);
      setCurrentStep(2);
    } else {
      console.log('Using existing form ID:', formId);
    }

    // Update the form and user object in context
    setForm((prevForm) => ({
      ...prevForm,
      formId: formId,
    }));
    navigateWithParams(`/request-quotes/${slug}`);
  };

  if (!appContext.selectedService) {
    return null;
  }



  return (
    <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-12 sm:space-y-20 lg:space-y-24'>
      <div className="z-10">
        <div className="space-y-8">
          <div className='flex justify-center text-center'>
            <div className="max-w-[60rem] text-center">
              <h1 className="section_header">
                Hi {user.firstname}, ready to schedule your appointment?
              </h1>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-4 max-w-screen-lg w-full sm:px-8">
              <div className="flex flex-col gap-4 flex-grow min-w-[250px] w-[600px] max-w-[100%]">
                <div className="bg-white border border-gray-200 rounded-md">
                  <div className="text-left mx-4 my-4">
                  <div className="flex items-center">
                    <div className="flex items-center text-gray-800 mb-3">
                      <p className="text-lg font-semibold ml-2">Project Details</p>
                    </div>
                  </div>
                    <hr className='mb-4'></hr>
                    <div className="flex items-center mb-4 ml-4 md:ml-8 min-w-52">
                      <IconComponent name={selectedService.name} className="w-14 h-14" />
                      <div className="flex flex-wrap justify-between flex-grow">
                      <h3 className="text-lg font-medium text-gray-800 dark:text-white pl-6 pr-4">
                        {selectedService.name} {form.serviceSpecification ? form.serviceSpecification : 'Service'}
                      </h3>
                      </div>
                    </div>
                    {/* Schedule */}
                    <hr className='mb-4'></hr>
                    <p className="text-sm font-semibold text-gray-800 mb-3">Scheduled Date and Time</p>
                    {form.date && form.time ? (
                      <div className="flex flex-wrap justify-between my-4 w-auto bg-gray-100 rounded-md pb-4 space-y-2">
                        <div className="flex items-center px-8 min-w-[200px] mt-2">
                          <img src="/images/calendar.svg" alt="Calendar" className="inline mr-2 h-5" />
                          <p className="text-base text-gray-800">{formatDate(form.date)}</p>
                        </div>

                        <div className="hidden sm:flex items-center px-8">
                          <img src="/images/clock.svg" alt="Clock" className="inline mr-2 h-5" />
                          <p className="text-base text-gray-800">{formatTime(form.time)}</p>
                          
                          {user.timezone && ( 
                            <div className='flex items-center'>
                              <img src="/images/globe.svg" alt="Clock" className="inline ml-4 mr-2 h-5" />
                              <p className="text-base text-gray-800">{user.timezone}</p>
                            </div>)}
                        </div>
                        <div className="flex items-center px-8 sm:hidden">
                          <img src="/images/clock.svg" alt="Clock" className="inline mr-2 h-5" />
                          <p className="text-base text-gray-800">{formatTime(form.time)}</p>
                        </div>
                        {user.timezone && (
                          <div className="flex items-center px-8 sm:hidden">
                            <img src="/images/globe.svg" alt="Clock" className="inline mr-2 h-5" />
                            <p className="text-base text-gray-800">{user.timezone}</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-wrap justify-between my-4 w-auto bg-orange-100 rounded-md py-4">
                        <div className="flex items-center px-8 min-w-[200px]">
                          <svg className="size-3 text-orange-800 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                          </svg>
                          <p className="text-base text-orange-800">Request an Appointment</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex-grow min-w-[250px] max-w-[100%] bg-white border border-gray-200 rounded-md h-auto">
                <div className='text-left mx-4 my-4'>
                  <p className='text-lg font-semibold text-gray-800 mb-3'>Customer Information</p>
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

          <div className="flex justify-center items-center">
            <div className="justify-center sm:mx-8 w-[960px]">
              <div>
                <p className="text-center text-sm text-gray-600 dark:text-neutral-400 mt-4">
                  Click the button below to request your free consultation and take the first step toward your home improvement goals
            
                </p>
              </div>
              <div>
                <div className='flex justify-center mt-8'>
                  <button
                  onClick={handleButtonClick}
                    className='mt-4 w-full py-5 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-accentColor text-white hover:bg-accentDark transform transition-transform'
                    disabled={loading }
                  >
                    {loading ? (
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    ) : (
                      'Request an Appointment'
                    )}
                  </button>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default STLHero
