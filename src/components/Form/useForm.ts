import React from 'react';
import { merge } from 'lodash';

const useForm = (config: any) => {
  const getInitialConfig = () => {
    const configObject: any = {};

    Object.keys(config).map((key: any) => {
      configObject[key] = {
        ...config[key],
        typed: false,
        isValid: true,
        shouldValidate: false,
        setConfig: (newConfig: any) =>
          setFormFields((prev: any) => ({
            ...prev,
            [key]: merge(prev[key], newConfig),
          })),
      };
    });

    return configObject;
  };

  const [formFields, setFormFields] = React.useState(getInitialConfig);

  const values = () => {
    const formValues: any = {};

    Object.keys(formFields).map((key: any) => {
      formValues[key] = formFields[key].value;
    });

    return formValues;
  };

  const resetFields = () => {
    setFormFields(getInitialConfig());
  };

  const isSubmissionValid = () => {
    const newForm = { ...formFields };
    let isValid = true;

    Object.keys(formFields).map((key: any) => {
      const isFieldValid = formFields[key].props.validation?.(
        formFields[key].value
      );

      if (!isFieldValid) {
        isValid = false;
      }

      newForm[key] = {
        ...formFields[key],
        isValid: isFieldValid,
        shouldValidate: true,
      };
    });

    setFormFields(newForm);

    return isValid;
  };

  const setFormField = (keyName: any, newConfig: any) => {
    setFormFields((prev: any) => ({
      ...prev,
      [keyName]: { ...prev[keyName], ...newConfig },
    }));
  };

  return {
    values,
    formFields: () => formFields,
    setFormFields,
    resetFields,
    isSubmissionValid,
    setFormField,
  };
};

export default useForm;
