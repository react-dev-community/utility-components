import React from 'react';
import FormContext from './FormContext';

const FormProvider: React.FC<any> = ({ form, children }) => {
  return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
};

export default FormProvider;
