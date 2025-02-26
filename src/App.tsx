import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import RequestQuote from './pages/RequestQuote';
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { useEffect, useState } from 'react';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import "vanilla-cookieconsent/dist/cookieconsent.css";
import {central} from '@/lib/supabaseClient';
import { useAppContext } from '@/context/AppContext';
import ThankYou from './pages/ThankYou';
import Inbound from './pages/Inbound';
import InboundThankYou from './pages/InboundThanksYou';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false); // State to control rendering
  const params = new URLSearchParams(location.search);
  const companyId = params.get('company_id');
  const conceptId = params.get('concept_id');

  const { setContractor, setServices, setLocations, contractor, setForm, services, form, user, locations } = useAppContext();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const storedContractor = localStorage.getItem('contractor');
      const storedServices = localStorage.getItem('services');
      const storedLocations = localStorage.getItem('locations');

      if (storedContractor && storedServices && storedLocations) {
        // Load from local storage
        setContractor(JSON.parse(storedContractor));
        setServices(JSON.parse(storedServices));
        setLocations(JSON.parse(storedLocations));
        setLoading(false);
      } 
        // Fetch contractor
        console.log('Fetching contractor data...');
        try {
          const { data, error } = await central
            .from('contractors')
            .select('*')
            .eq('id', companyId)
            .single();

          if (error) {
            return;
          }
          if (data) {
            console.log('Contractor data fetched:', data);
            setContractor(data);
            localStorage.setItem('contractor', JSON.stringify(data));

            // Fetch services
            const { data: servicesData, error: servicesError } = await central
            .from('contractor_services')
            .select('*, services(name)')
            .eq('contractor_id', companyId);

            if (servicesError) {
              console.error('Error fetching services:', servicesError);
            } else {
              setServices(servicesData || []);
              localStorage.setItem('services', JSON.stringify(servicesData || []));
              console.log('Services fetched successfully');
            }

            // Fetch locations
            const { data: locationsData, error: locationsError } = await central
            .from('contractor_locations')
            .select('*')
            .eq('contractor_id', companyId);

            if (locationsError) {
              console.error('Error fetching locations:', locationsError);
            } else {
              setLocations(locationsData || []);
              localStorage.setItem('locations', JSON.stringify(locationsData || []));
              console.log('Locations fetched successfully');
            }
            setLoading(false);
          }
        } catch (err) {
          console.error('Unexpected error fetching data:', err);
          return;
        }
    };
    fetchInitialData();
  }, []);

  useEffect(() => {
    const fetchConcepts = async () => {
      if (conceptId) {
        try {
          const { data, error } = await central
            .from('concepts')
            .select('*')
            .eq('id', conceptId)
            .single();

          if (error) {
            console.error('Error fetching concept:', error);
          } else {
            setForm((prevForm) => ({
              ...prevForm,
              concept: data,
            }));
            console.log('Concept data fetched:', data);
          }
        } catch (err) {
          console.error('Unexpected error fetching concept data:', err);
        }
      }
    };

    fetchConcepts();
  }, [conceptId]);

  useEffect(() => {
    if (contractor) {
      // Update the document title
      document.title = contractor.name;

      // Update the favicon
      const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
      if (favicon) {
        favicon.href = contractor.favicon;
      } else {
        const newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        newFavicon.href = contractor.favicon;
        document.head.appendChild(newFavicon);
      }
    }
  }, [contractor]);

  useEffect(() => {
    console.log('contractor', contractor);
    console.log('services', services);
    console.log('locations', locations);
    console.log('form', form);
    console.log('user', user);
  }
  , [ contractor, services, locations, form, user]);

  // Set custom colors from contractor data
  useEffect(() => {
    if (contractor && contractor.colors) {
      const accentColor = contractor.colors.accent || '#FA5100'; 
      const light = contractor.colors.light || '#fff1eb';
      const dark = contractor.colors.dark || '#d84a05';
      const darker = contractor.colors.darker || '#ab3c06';
      document.documentElement.style.setProperty('--light', light);
      document.documentElement.style.setProperty('--accent', accentColor);
      document.documentElement.style.setProperty('--darker', darker);
      document.documentElement.style.setProperty('--dark', dark);
    }
  }, [ contractor ]);

  if (loading || !contractor || !services || !locations) {
    return null; // Render nothing while loading
  }
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:slug' element={<Home />} />
        <Route path='/inbound/:slug' element={<Inbound />} />
        <Route path='/request-quotes/:slug' element={<RequestQuote />} />
        <Route path='/cookie-policy/:slug' element={<CookiePolicy />} />
        <Route path='/privacy-policy/:slug' element={<PrivacyPolicy />} />
        <Route path='/summary/:slug' element={<ThankYou />} />
        <Route path='/summary-inbound/:slug' element={<InboundThankYou />} />
        {/* <Route path="*" element={<RequestQuote />} /> */}
      </Routes>
    </>
  );
}

export default App;
