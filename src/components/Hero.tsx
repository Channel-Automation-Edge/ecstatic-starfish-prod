"use client";
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '@/context/AppContext';
import useClearFormState from '@/hooks/useClearFormState.tsx';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import {PromoModal, DialogTitle, Dialog} from '@/components/PromoModal';

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const appContext = useContext(AppContext);
  const clearFormState = useClearFormState();

  if (!appContext) {
    return null; 
  }

  const capitalizeWords = (str: string | null) => {
    if (!str) return '';
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };

  const { contractor, setForm, form, services } = appContext;
  const urlParams = new URLSearchParams(location.search);
  const firstnameParam = capitalizeWords(urlParams.get('firstname')) || '';
  const stateParam = urlParams.get('state') || '';
  const zipParam = urlParams.get('zip') || '';
  const [slug, setSlug] = useState('');

  useEffect(() => {
    if (appContext && appContext.contractor) {
      setSlug(appContext.contractor.slug);
    }
  }, [appContext, appContext.contractor]);


  // Default content
  const defaultLede = zipParam
    ? `Hi ${firstnameParam}, find top contractors in ${stateParam} near ${zipParam} for your upcoming remodel and control your quotes`
    : stateParam
    ? `Hi ${firstnameParam}, find top contractors in ${stateParam} for your upcoming remodel and control your quotes`
    : "Hi there, find top contractors in your area for your upcoming remodel and control your quotes";

  const heroH1 = contractor.content.hero_h1 || "Building Better Spaces for Better Living";
  const heroLede = contractor.content.hero_lede || defaultLede;
  const heroCtaLabel = contractor.content.hero_cta || "Get Free Assessment";

  const [buttonText, setButtonText] = useState(heroCtaLabel);
  const [, setSubheadingText] = useState("Or select a service to get started");
  const [subheadingText1, setSubheadingText1] = useState(heroLede);
  
  // Update button text based on form progress
  useEffect(() => {
    const step = localStorage.getItem('formStep');
    const targetStep = services.length === 1 ? "2" : "1";

    if (step !== null && step !== targetStep) {
      setButtonText("Finish your Previous Quote");
      setSubheadingText("Or reset your progress and select another service");
    } else {
      setButtonText(heroCtaLabel);
    }

    setSubheadingText1(heroLede);
  }, [services.length, heroLede, heroCtaLabel]);

  // Function to append current URL parameters
  const navigateWithParams = (path: string) => {
    const currentParams = new URLSearchParams(location.search);
    navigate(`${path}?${currentParams.toString()}`);
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

  const handleButtonClick = () => {
    let formId = form.formId;

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

    // Update the form and user object in context
    setForm((prevForm) => ({
      ...prevForm,
      formId: formId,
    }));
    navigateWithParams(`/request-quotes/${slug}`);
  };

  const bRoll = contractor.content.b_roll || 'https://storage.googleapis.com/channel_automation/Webassets/video/homeprojectparterns-hero_9.0.10.webm'; // Get hero video from contractor content

  return (
    <div>
      {/* <NavBar2 /> */}
      <div className="relative flex items-center" style={{ height: 'calc(100vh - 64px)' }}>
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src={bRoll}
          ></video>
        </div>
        <div className="absolute inset-0 bg-[#12121d99] opacity-100 z-[1]"></div> {/* Moved overlay after video and added z-index */}

        <div className="relative z-[2] w-full overflow-hidden"> {/* Added z-index to content container */}
          
          <div className="z-10 lg:w-8/12 flex items-left justify-left flex-col px-4 sm:pl-16 mt-0 space-y-6 md:space-y-6 pb-4">
            <p
              className="block font-display text-left text-5xl lg:text-6xl font-semibold text-white mt-14 lg:mt-20">
              {heroH1}
            </p>

            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base lg:text-lg text-white/80 text-left"
            >
              {firstnameParam ? `Hi ${firstnameParam}! ` : ''}{subheadingText1}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ delay: 0.7 }} className="mt-5 lg:mt-8 flex flex-col items-start gap-2 sm:flex-row sm:gap-3">
              
              <InteractiveHoverButton className='bg-accentColor text-white border-transparent text-sm rounded-lg py-3' onClick={handleButtonClick}>{buttonText}</InteractiveHoverButton>
            </motion.div>

          </div>
        </div>
      </div>
      <Dialog open={true}>
        <DialogTitle></DialogTitle>
        <PromoModal onButtonClick={handleButtonClick} />
      </Dialog>
    </div>
  );
};

export default Hero;
