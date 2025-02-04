import Hero from '../components/Hero';
import Benefits from '@/components/Benefits';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ServiceCards from '@/components/ServiceCards';
import { AppContext } from '@/context/AppContext';
import { useContext } from 'react';
import NavBar2 from '@/components/NavBar2';
import Feature from '@/components/Feature';

const Home = () => {
  const appContext = useContext(AppContext);
  
  if (!appContext || !appContext.contractor || !appContext.services) {
    return null; // Handle the case where data is not loaded yet
  }
  const { services } = appContext;
  

  return (
    <div className='bg-white'>
      <NavBar2 />
      <Hero/>      
      <Testimonials />
      {services && services.length > 1 && <ServiceCards />} 
      <Feature />
      <Benefits />
      <FAQ />
      <Footer />
      </div>
  )
}

export default Home
