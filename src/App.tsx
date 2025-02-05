import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import RequestQuote from './pages/RequestQuote';
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { useContext, useEffect, useState } from 'react';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import "vanilla-cookieconsent/dist/cookieconsent.css";
import {central} from '@/lib/supabaseClient';
import { AppContext } from '@/context/AppContext';
import ThankYou from './pages/ThankYou';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();
  const appContext = useContext(AppContext);
  const [loading, setLoading] = useState(false); // State to control rendering
  const params = new URLSearchParams(location.search);
  const companyId = params.get('company_id');
  const conceptId = params.get('concept_id');

  if (!appContext) {
    return null;
  }

  const { setContractor, setServices, setLocations, contractor, user, setUser, setForm } = appContext;

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

  // fetch zip if user.zip is present or changed
  useEffect(() => {
    const fetchZip = async () => {
      if (user.zip) {
        try {
          const { data, error } = await central
            .from('zips')
            .select('*')
            .eq('zip', user.zip)
            .single();

          if (error) {
            console.error('Error fetching zip:', error);
          } else {
            setUser(prevUser => ({
              ...prevUser,
              city: data.city,
              state: data.state_id,
              timezone: data.timezone,
            }));
          }
        } catch (err) {
          console.error('Unexpected error:', err);
        }
      }
    };

    fetchZip();
  }, [user.zip]);

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
    console.log('contractor', appContext.contractor);
    console.log('services', appContext.services);
    console.log('locations', appContext.locations);
    console.log('form', appContext.form);
    console.log('user', appContext.user);
  }
  , [appContext]);

  // Set custom colors from contractor data
  useEffect(() => {
    if (appContext && appContext.contractor && appContext.contractor.colors) {
      const accentColor = appContext.contractor.colors.accent || '#FA5100'; 
      const light = appContext.contractor.colors.light || '#fff1eb';
      const dark = appContext.contractor.colors.dark || '#d84a05';
      const darker = appContext.contractor.colors.darker || '#ab3c06';
      document.documentElement.style.setProperty('--light', light);
      document.documentElement.style.setProperty('--accent', accentColor);
      document.documentElement.style.setProperty('--darker', darker);
      document.documentElement.style.setProperty('--dark', dark);
    }
  }, [appContext]);

  if (loading) {
    return null; // Render nothing while loading
  }
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:slug' element={<Home />} />
        <Route path='/request-quotes/:slug' element={<RequestQuote />} />
        <Route path='/cookie-policy/:slug' element={<CookiePolicy />} />
        <Route path='/privacy-policy/:slug' element={<PrivacyPolicy />} />
        <Route path='/summary/:slug' element={<ThankYou />} />
        {/* <Route path="*" element={<RequestQuote />} /> */}
      </Routes>
    </>
  );
}

export default App;
