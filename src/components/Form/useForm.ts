import React from 'react';
import { merge } from 'lodash';

const getConfig = (type: any, field: any) => {
  switch (type) {
    case 'Picker':
      return {
        value: field.props?.options?.[field.index]?.value || null,
        index: field.props?.index,
        visible: field.props?.visible || false,
      };
    case 'TextInput':
    default:
      return { value: field.props?.value || '' };
  }
};

const useForm = (config: any) => {
  const getInitialConfig = () => {
    const configObject: any = {};

    Object.keys(config).map((key: any) => {
      configObject[key] = {
        ...config[key],
        ...getConfig(config[key].type, config[key]),
        touched: false,
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
      const isFieldValid = formFields[key].props?.validation?.(
        formFields[key].value,
        form
      );

      if (isFieldValid === false) {
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

  const form = {
    values,
    formFields: () => formFields,
    setFormFields,
    resetFields,
    isSubmissionValid,
    setFormField,
  };

  return form;
};

export default useForm;
