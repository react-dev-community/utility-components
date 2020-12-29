import React from 'react';

const useForm = (config: any, formConfig: any) => {
  const getInitialConfig = () => {
    const configObject: any = {};

    Object.keys(config).map((key: any) => {
      configObject[key] = { ...config[key], typed: false, isValid: true };
    });

    return configObject;
  };

  const [shouldValidate, setshouldValidate] = React.useState(false);

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
    if (!formConfig.validateAfterSubmission) {
      setshouldValidate(true);
    }

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
        typed: true,
      };
    });

    setFormFields(newForm);

    return isValid;
  };

  React.useEffect(() => {
    // console.log(formFields);
  }, [formFields]);

  return {
    values,
    formFields: () => formFields,
    setFormFields,
    resetFields,
    isSubmissionValid,
    shouldValidate,
  };
};

export default useForm;
