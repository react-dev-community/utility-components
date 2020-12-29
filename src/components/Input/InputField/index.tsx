import React from 'react';
import Input from '..';
import { FormContext } from '../../Form';
import { InputProps } from '../types/types';

interface Props extends InputProps {
  keyName: string;
}

const InputField: React.FC<Omit<
  Props,
  'value' | 'setValue' | 'setIsValid' | 'isValid'
>> = ({ keyName, ...restProps }) => {
  const form = React.useContext(FormContext);

  const formFields = form.formFields();
  const setFormFields = form.setFormFields;

  const field = formFields[keyName];

  return (
    <Input
      {...field.props}
      {...restProps}
      value={field.value}
      isValid={field.isValid || !form.shouldValidate}
      setValue={(value: any) => {
        setFormFields((prev: any) => ({
          ...prev,
          [keyName]: { ...prev[keyName], value, typed: true },
        }));
      }}
      setIsValid={(isValid: any) => {
        setFormFields((prev: any) => ({
          ...prev,
          [keyName]: { ...prev[keyName], isValid },
        }));
      }}
    />
  );
};

export default InputField;
