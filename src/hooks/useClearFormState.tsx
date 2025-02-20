import { useContext } from 'react';
import { AppContext } from '@/context/AppContext'; // Ensure AppContext is correctly imported

const useClearFormState = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error('useClearFormState must be used within an AppContextProvider');
  }

  const { setUser, setForm, setSelectedService } = appContext;

  const clearFormState = () => {
    console.log('CLEARING FORM AND USER ...');
    setUser(prev => ({
      ...prev,
      firstname: null,
      lastname: null,
      address1: null,
      address2: null,
      city: null,
      email: null,
      phone: null,
      state: null,
      userNs: null,
      zip: null,
      timezone: null,
      stl: false,
    }));

    setForm(prev => ({
      ...prev,
      serviceSpecification: null,
      promo: '',
      generalOptIn: false,
      termsAndPrivacyOptIn: false,
      date: null,
      time: null,
      concept: null,
      isBooked: false,
    }));

    setSelectedService(null);

    // clear local storage
    localStorage.removeItem('user');
    localStorage.removeItem('form');
    localStorage.removeItem('selectedService');
  };

  return clearFormState;
};

export default useClearFormState;
