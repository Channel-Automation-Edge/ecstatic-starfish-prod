import { useContext, useEffect, useState } from 'react';
import ParentForm from "@/components/forms/ParentForm";
import { useLocation } from 'react-router-dom';
import { Dialog, DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogClose,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import posthog from 'posthog-js';
import { AppContext } from '@/context/AppContext';
import Navbar from '@/components/NavBar';

const RequestQuote = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const appContext = useContext(AppContext);

  if (!appContext) {
    return null; // Handle the case where data is not loaded yet
  }
  const [slug, setSlug] = useState('');

  useEffect(() => {
    if (appContext && appContext.contractor) {
      setSlug(appContext.contractor.slug);
    }
  }, [appContext, appContext.contractor]);

  useEffect(() => {
    const handlePopState = () => {
      if (!isModalOpen) {
        setIsModalOpen(true);
        document.getElementById("modal")?.click();
      }
    };

    window.history.pushState(null, '', window.location.pathname + window.location.search);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location.pathname, location.search, isModalOpen]);

  const handleLeave = () => {
    posthog.capture('page_exit test in request',);
    const params = window.location.search;
    window.location.href = `/${slug}` + params;
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!appContext.contractor) {
    return null;
  }

  return (
    <div className='bg-gray-50'>
      <Navbar />
      <ParentForm />
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <button id='modal' className='hidden'></button>
        </DialogTrigger>
        <DialogTitle></DialogTitle>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <h4 className='text-md font-semibold'>Wait!</h4>
            <DialogDescription>
              Are you sure you want to leave this page? Don't worry, your changes will be saved.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button className='bg-gray-200 hover:bg-gray-300 text-gray-800' onClick={handleCloseModal}>Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button className='bg-accentColor hover:bg-accentDark mb-2' onClick={handleLeave}>Leave Page</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RequestQuote;



