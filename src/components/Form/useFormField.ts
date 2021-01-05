import React from 'react';
import FormContext from './FormContext';

const useFormField = (keyName: string) => {
  const form = React.useContext(FormContext);

  const formFields = form.formFields();
  const setFormFields = form.setFormFields;

  const field = formFields[keyName];

  return { setFormFields, field, form };
};

export default useFormField;
