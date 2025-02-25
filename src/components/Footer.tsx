import { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/context/AppContext';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const appContext = useContext(AppContext);

  if (!appContext || !appContext.contractor || !appContext.services) {
    return null; // Handle the case where data is not loaded yet
  }

  const { contractor } = appContext;
  const [slug, setSlug] = useState('');
  const location = useLocation();
  const currentParams = new URLSearchParams(location.search);
      
  useEffect(() => {
    if (appContext && appContext.contractor) {
      setSlug(appContext.contractor.slug);
    }
  }, [appContext, appContext.contractor]);

  // Use dynamic links from contractor
  const privacyPolicyLink = contractor.privacy_policy_link || `/privacy-policy/${slug}`;
  const termsAndConditionsLink = contractor.terms_and_conditions_link || `#`;

  return (
    <footer className="bg-accentDark">
      <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center text-white text-sm">
        <div className="flex space-x-4">
        <a
            href={`${privacyPolicyLink}?${currentParams.toString()}`}
            className="hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href={`${termsAndConditionsLink}?${currentParams.toString()}`}
            className="hover:underline"
          >
            Terms & Conditions
          </a>
        </div>
        <div>

          &copy; 2024 {contractor?.name} 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
