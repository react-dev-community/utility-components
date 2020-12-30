import React from 'react';
import Input from '..';
import { TextInputRefType } from '../../../types';
import { FormContext } from '../../Form';
import { InputProps } from '../types/types';

interface Props extends InputProps {
  keyName: string;
}

const InputField: React.FC<Omit<
  Props,
  'value' | 'setState' | 'isValid' | 'validation'
>> = ({ keyName, ...restProps }) => {
  const form = React.useContext(FormContext);

  const formFields = form.formFields();
  const setFormFields = form.setFormFields;

  const field = formFields[keyName];

  const ref: TextInputRefType = React.useRef(null);

  return (
    <Input
      {...restProps}
      {...field.props}
      inputRef={ref}
      extraValidationData={form.values()}
      value={field.value}
      isValid={field.isValid}
      shouldValidate={field.shouldValidate}
      setState={(arg: any) => {
        if (typeof arg === 'function') {
          // If setState is called with prev Function
          setFormFields((prev: any) => ({
            ...prev,
            [keyName]: {
              ...prev[keyName],
              isValid: field.props.validation(
                prev[keyName].value,
                form.values()
              ),
            },
          }));
        } else {
          // If value is directly passed
          setFormFields((prev: any) => ({
            ...prev,
            [keyName]: { ...prev[keyName], typed: true, ...arg },
          }));
        }
      }}
    />
  );
};

export default React.memo(InputField);
