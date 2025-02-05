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
    return null;
  }
  const { services } = appContext;
  

  return (
    <div className='bg-white'>
      <NavBar2 />
      <Hero/>
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
