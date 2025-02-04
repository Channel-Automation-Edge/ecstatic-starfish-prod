import React, { useContext, useState } from 'react';
import { AppContext } from '@/context/AppContext';
import NavButtons from '../ui/navButtons';

// Define props interface
interface Step3SpecificationsProps {
  onNext: () => void;
  onBack: () => void;
  onReset: () => void;
}

const Step3Specifications: React.FC<Step3SpecificationsProps> = ({ onNext, onBack, onReset }) => {
  const appContext = useContext(AppContext);

  if (!appContext || !appContext.contractor || !appContext.services) {
    return null; // Handle the case where data is not loaded yet
  }

  const { setForm, contractor, services } = appContext; // Access form and setForm from appContext
  const [loading, setLoading] = useState<boolean>(false);
  const accent_rgba = contractor.colors.accent_rgba || '0 10px 25px -6px rgba(0, 0, 0, 0.1)';

  const capitalizeWords = (str: string | null) => {
    if (!str) return '';
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };
  
  // Get firstname from URL parameters
  const params = new URLSearchParams(window.location.search);
  const firstname = capitalizeWords(params.get('firstname'));

  // Determine the heading text based on conditions
  let headingText;
  if (services.length === 1) {
    headingText = firstname ? `Hi, ${firstname}! ` : "Hi there! ";
  } else {
    headingText = "Great! ";
  }

  const handleBack = () => {
    onBack();
  };

  const handleReset = () => {
    onReset();
  };

  const handleSelect = async (spec: string) => {
    setLoading(true); // Show spinner

    setForm((prevForm) => ({
      ...prevForm,
      serviceSpecification: spec,
    }));

    setLoading(false); // Hide spinner
    onNext();
  };

  return (
    <div className="container-form">
      <NavButtons handleBack={handleBack} handleReset={handleReset} />

      <div className="space-y-8">
        <div className='flex justify-center text-center mb-8'>
          <div className="max-w-[40rem] text-center">
            <h1 className="heading-form"> {headingText}
            Let us know <span className="text-accentColor">what you need </span> and let's get started!
            </h1> 
          </div>
        </div>

        <div className="mt-12 flex flex-col h-full">
          <div className="container-cards">
            {["Repair", "Remodel"].map((spec) => (
              <button
                key={spec}
                type="button"
                className="cards-button"
                onClick={() => handleSelect(spec)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = accent_rgba + ' 0px 10px 25px -6px ';
                  e.currentTarget.style.borderColor = accent_rgba;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.07) 0px 10px 25px -6px';
                  e.currentTarget.style.borderColor = 'rgba(157, 176, 197, 0.25)';
                }}
              >
                <img
                  src={`/images/${spec.toLowerCase()}.svg`}
                  alt={`${spec.toLowerCase()} icon`}
                  className="w-12 h-12 sm:w-14 sm:h-14 sm:mb-4 ml-2 mr-4 sm:ml-0 sm:mr-0"
                />
                <span className="cards-text">{spec}</span>
              </button>
            ))}
          </div>
          {loading && (
            <div className="flex justify-center pt-20">
              <div className="animate-spin h-6 w-6 border-2 border-accentColor border-t-transparent rounded-full"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step3Specifications;
