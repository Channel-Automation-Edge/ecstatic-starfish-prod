"use client";
import { useContext, useEffect, useState } from 'react'; 
import { AppContext } from '@/context/AppContext';
import { useLocation } from 'react-router-dom';

const NavBar2 = () => {
  const appContext = useContext(AppContext);
  const location = useLocation();  // Hook to access the current location

  if (!appContext) {
    return null; 
  }

  const [slug, setSlug] = useState('');

  useEffect(() => {
    if (appContext && appContext.contractor) {
      setSlug(appContext.contractor.slug);
    }
  }, [appContext, appContext.contractor]);

  const logoSrc = appContext.contractor.content.logo;

  // Create the new URL with preserved query parameters
  const currentParams = new URLSearchParams(location.search);
  const newUrl = `/${slug}?${currentParams.toString()}`;

  return (
    <div className=''>
      <header className="">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-28 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12 ">
              <a className="block text-accent" href={newUrl}>
                <span className="sr-only">Home</span>
                <img src={logoSrc} alt="Logo" className="h-12 sm:h-14 lg:h-16" />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex sm:gap-4">
                <a
                  className="rounded-md bg-transparent px-5 py-2.5 text-sm font-medium text-gray-800 hover:text-accentColor inline-flex items-center"
                  href="tel:+18594075999"
                >
                  <svg id="fi_5585856" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className="w-6 h-6 mr-2 text-accentColor">
                    <path d="m256 0c141.385 0 256 114.615 256 256s-114.615 256-256 256-256-114.615-256-256 114.615-256 256-256zm150.3 374.436a19.622 19.622 0 0 0 0-27.678l-50.111-50.1a19.63 19.63 0 0 0 -27.69 0l-13.617 13.623a29.8 29.8 0 0 1 -35.245 5.279 200.184 200.184 0 0 1 -83.193-83.183 29.82 29.82 0 0 1 5.27-35.257l13.643-13.62a19.631 19.631 0 0 0 0-27.685l-50.111-50.095a19.629 19.629 0 0 0 -27.691 0c-2.071 2.065-4.691 4.56-7.493 7.2-7.007 6.623-15.749 14.866-19.283 20.048-18.613 27.239-9.687 63.681 1.036 89.459 14.165 33.977 40.271 71 73.536 104.242 33.235 33.238 70.246 59.347 104.242 73.512 25.772 10.738 62.2 19.642 89.438 1.033 5.179-3.537 13.434-12.258 20.044-19.274 2.651-2.797 5.148-5.44 7.225-7.504z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar2;
