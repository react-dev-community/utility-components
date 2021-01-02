import React from 'react';
import { TextInputRefType } from '../../../types';
import { InputProps } from '../types/types';
import FormContext from '../../Form/FormContext';
import Input from '..';
interface Props extends InputProps {
  keyName: string;
}

export type InputFieldProps = Omit<
  Props,
  'value' | 'setState' | 'isValid' | 'validation'
>;

const InputField: React.FC<InputFieldProps> = ({ keyName, ...restProps }) => {
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

export default InputField;
