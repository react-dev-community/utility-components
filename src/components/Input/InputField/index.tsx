import React from 'react';
import Input from '..';
import { TextInputRefType } from '../../../types';
import useFormField from '../../Form/useFormField';
import { InputProps } from '../types/types';
interface Props extends InputProps {
  keyName: string;
}

export type InputFieldProps = Omit<
  Props,
  'value' | 'setState' | 'isValid' | 'validation'
>;

const InputField: React.FC<InputFieldProps> = ({ keyName, ...restProps }) => {
  const { field, form, setFormFields } = useFormField(keyName);
  const ref: TextInputRefType = React.useRef(null);

  return (
    <Input
      {...restProps}
      {...field.props}
      inputRef={ref}
      extraValidationData={form}
      value={field.value}
      isValid={field.isValid}
      shouldValidate={field.shouldValidate}
      setState={(arg: any) => {
        if (typeof arg === 'function') {
          // If setState is called with prev Function
          setFormFields((prev: any) => ({
            ...prev,
            touched: true,
            [keyName]: {
              ...prev[keyName],
              ...arg({
                value: prev[keyName].value,
                isValid: prev[keyName].isValid,
              }),
            },
          }));
        } else {
          // If value is directly passed
          setFormFields((prev: any) => ({
            ...prev,
            [keyName]: { ...prev[keyName], touched: true, ...arg },
          }));
        }
      }}
    />
  );
};

export default InputField;
