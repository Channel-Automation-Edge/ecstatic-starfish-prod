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
  
  if (!appContext || !appContext.contractor) {
    return null; // Return null if appContext or contractor is not available
  }
  const { services } = appContext;
  

  return (
    <div>
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
