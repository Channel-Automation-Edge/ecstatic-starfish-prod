import React from 'react';
import BackButton from '@/components/ui/backButton';
import ResetButton from '@/components/ui/resetButton';
import { AppContext } from '@/context/AppContext';
import { useContext } from 'react';

interface NavButtonsProps {
  handleBack: () => void;
  handleReset: () => void;
}

const NavButtons: React.FC<NavButtonsProps> = ({ handleBack, handleReset }) => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    return null;
  }

  const hasAvatar = appContext.contractor?.content?.avatar;

  return (
    <div>
      <div className={`absolute ${
          hasAvatar
            ? 'top-[-102px] custom-smallest:top-[-110px] small-stepper:top-[-115px] sm:top-[-121px] md:top-[-137px]'
            : 'top-[-54px] custom-smallest:top-[-61px] small-stepper:top-[-67px] sm:top-[-73px] md:top-[-90px]'
        } left-0 w-full flex justify-between p-4`}>
          <BackButton onClick={handleBack} />
          <ResetButton onClick={handleReset} /> 
        </div>
    </div>
  );
};

export default NavButtons;
