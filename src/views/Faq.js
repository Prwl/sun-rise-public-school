import React from 'react';
import Faqs from '../components/sections/Faqs';

import { ToastProvider } from 'react-toast-notifications';

const Faq = () => {

  return (
    <> 
    <ToastProvider>
      <Faqs className="illustration-section-01" />
    </ToastProvider>
    </>
  );
}

export default Faq;