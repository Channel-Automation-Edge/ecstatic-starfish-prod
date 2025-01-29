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

  if (!appContext) {
    return null;
  }

  const { setForm, contractor } = appContext; // Access form and setForm from appContext
  const [loading, setLoading] = useState<boolean>(false);
  const accent_rgba = contractor.colors.accent_rgba || '0 10px 25px -6px rgba(0, 0, 0, 0.1)';

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
    <div className="z-10 max-w-[100rem] px-4 md:px-14 py-10 lg:py-14 mx-auto relative">
      <NavButtons handleBack={handleBack} handleReset={handleReset} />

      <div className="space-y-8">
        <div className='flex justify-center text-center mb-8'>
          <div className="max-w-[40rem] text-center">
            <h1 className="block text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold sm:font-bold md:font-semibold lg:font-semibold text-gray-800 dark:text-white">
              Great! Please <span className="text-accentColor">specify your needs </span> further and let's get started!
            </h1> 
          </div>
        </div>

        <div className="mt-12 flex flex-col h-full">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-[20px]" style={{ marginTop: '15px', width: '100%' }}>
            {["Repair", "Remodel"].map((spec) => (
              <button
                key={spec}
                type="button"
                className="flex flex-row sm:flex-col items-center justify-start sm:justify-center w-full sm:w-[200px] h-[80px] sm:h-[156px] border border-transparent rounded-xl shadow-md p-4 transition-transform transform hover:scale-100 sm:hover:scale-105 bg-white"
                onClick={() => handleSelect(spec)}
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.07) 0px 22px 30px -6px',
                  transition: 'box-shadow 0.3s ease',
                  borderColor: 'rgba(157, 176, 197, 0.25)',
                }}
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
                <span className="text-gray-800 text-base font-medium text-left sm:text-center ">{spec}</span>
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
