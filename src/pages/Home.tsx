import Hero from '../components/Hero';
import Benefits from '@/components/Benefits';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ServiceCards from '@/components/ServiceCards';
import { AppContext } from '@/context/AppContext';
import { useContext, useEffect, useState } from 'react';
import NavBar2 from '@/components/NavBar2';
import Feature from '@/components/Feature';
import STLHero from '@/components/STLHero';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const appContext = useContext(AppContext);
  const [loading, setLoading] = useState(true); // State to control rendering
  const location = useLocation();
  
  if (!appContext) {
    return null;
  }
  const { services, user, setUser } = appContext;

  useEffect(() => {
    const param = new URLSearchParams(window.location.search);

    const fetchSTL = () => {
      // Set the user's stl value based on the query parameter
      setUser(prevUser => ({
        ...prevUser,
        stl: param.get('stl') === 'true',
      }));
      setLoading(false);
    } 
    
    fetchSTL();
  }, [location.search, setUser]);
  
  if (loading || !appContext.services || !appContext.user) {
    return null; // Render nothing while loading
  }

  return (
    <div className='bg-white'>
      <NavBar2 />
      { user.stl ? <STLHero /> : <Hero />}   
      <Testimonials />
      <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24  space-y-12 sm:space-y-20 lg:space-y-24'>
        {services && services.length > 1 && <ServiceCards />} 
        <Feature />
        <Benefits />
        <FAQ />
      </div>      

      <Footer />
      </div>
  )
}

export default Home
