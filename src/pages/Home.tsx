import Hero from '../components/Hero';
import Benefits from '@/components/Benefits';
import FAQ from '@/components/FAQ';
import TabSection from '@/components/TabSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ServiceCards from '@/components/ServiceCards';
import { AppContext } from '@/context/AppContext';
import { useContext } from 'react';
import NavBar2 from '@/components/NavBar2';

const Home = () => {
  const appContext = useContext(AppContext);
  
  if (!appContext || !appContext.contractor) {
    return null; // Return null if appContext or contractor is not available
  }

  return (
    <div>
      <NavBar2 />
      <Hero/>
      
      <Testimonials />
      <ServiceCards />
      
        <TabSection/> 
        <Benefits />
        <FAQ />
      <Footer />
    </div>
  )
}

export default Home
