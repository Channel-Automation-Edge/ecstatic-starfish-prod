import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext'; // Ensure AppContext is correctly imported
import useClearFormState from '../hooks/useClearFormState';
import { useNavigate, useLocation } from 'react-router-dom';
import Services from './Services';
import BlurFade from './ui/blur-fade';
import useFormPersistence from '@/hooks/useFormPersistence';

const ServiceCards: React.FC = () => {
  const appContext = useContext(AppContext);
  if (!appContext) {
    return null;
  }

  const { contractor, services, form, setSelectedService } = appContext;
  const [, setCurrentStep, resetCurrentStep] = useFormPersistence('formStep', 1); 

  const navigate = useNavigate();
  const location = useLocation();
  const clearFormState = useClearFormState();
    const [slug, setSlug] = useState('');

  useEffect(() => {
    if (appContext && appContext.contractor) {
      setSlug(appContext.contractor.slug);
    }
  }, [appContext, appContext.contractor]);

  const handleServiceSelect = async (service: any) => {
    let formId = form.formId;

    resetCurrentStep();
    clearFormState();

    // If formId is not set, create a new formId
    if (!formId) {
      clearFormState();

      const dateTime = new Date().toISOString().replace(/[-:.T]/g, '').slice(0, 14); // YYYYMMDDHHMMSS format
      const randomString = generateRandomString(6);

      formId = `${contractor.id}-${dateTime}-${randomString}`;
      console.log('Generated formId:', formId);
    } else {
      console.log('Using existing form ID:', formId);
    }

    setSelectedService(service);

    console.log('Selected service:', service);
    console.log('Form ID:', formId);
    console.log(appContext.form);
    console.log(services);

    // Update local storage
    localStorage.setItem('selectedService', JSON.stringify(service));
    setCurrentStep(2);
    navigateWithParams(`/request-quotes/${slug}`);
  };
    
  // Function to generate a random string
  const generateRandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  // Function to append current URL parameters
  const navigateWithParams = (path: string) => {
    const currentParams = new URLSearchParams(location.search);
    navigate(`${path}?${currentParams.toString()}`);
  };

  return (
    <div className="z-10 max-w-[100rem] px-4 py-10 lg:py-14 mx-auto relative bg-white">
      <div className="text-center">
        <BlurFade delay={3 * 0.15} yOffset={15} className="font-semibold text-2xl md:text-3xl text-gray-800 dark:text-neutral-200">
            Check out the <span className="text-accentColor">services</span> we offer
        </BlurFade>
        <p className="mt-2 md:mt-4 text-gray-500 dark:text-neutral-500"></p>
      </div>
      <Services services={services} handleServiceSelect={handleServiceSelect} />
      {/* <div className='flex justify-center'>
        <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          {showZipInput && (
            <div className="w-full sm:w-auto">
              <input 
                type="text" 
                id="hero-input" 
                name="hero-input" 
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-accentColor text-center" 
                placeholder="Enter ZIP Code" 
                value={zip}
                onChange={handleZipChange}
              /> 
            </div>
          )}
          <button 
            className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-accentColor bg-white text-accentColor hover:bg-accentLight disabled:opacity-50 disabled:pointer-events-none" 
            onClick={handleButtonClick} 
            disabled={!isZipValid && showZipInput} // Disable button if zip is not valid
          >
            {buttonText}
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ServiceCards;
