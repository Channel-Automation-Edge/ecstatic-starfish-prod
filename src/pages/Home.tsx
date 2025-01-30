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
import {PromoModal, DialogTitle, Dialog} from '@/components/PromoModal';

const Home = () => {
  const appContext = useContext(AppContext);
  
  if (!appContext || !appContext.contractor) {
    return null; // Return null if appContext or contractor is not available
  }
  const { services } = appContext;

  const onButtonClick = () => {
    console.log('Button clicked');
  }
  

  return (
    <div>
      <NavBar2 />
      <Hero/>      
      <Testimonials />
      {services && services.length > 1 && <ServiceCards />}    
      <TabSection/> 
      <Benefits />
      <FAQ />
      <Footer />

      <Dialog open={true}>
        <DialogTitle></DialogTitle>
        <PromoModal onButtonClick={onButtonClick} />
      </Dialog>
      </div>
  )
}

export default Home
