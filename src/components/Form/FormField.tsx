import React from 'react';
import InputField, { InputFieldProps } from '../Input/InputField';
import { PickerProps } from '../Picker/types';

type PropsMap =
  | {
      inputComponent: 'TextInput';
      componentProps: Omit<InputFieldProps, 'keyName'>;
    }
  | {
      inputComponent: 'Picker';
      componentProps: PickerProps;
    };

interface FormFieldProps {
  keyName: string;
}

const FormField: React.FC<FormFieldProps & PropsMap> = ({
  keyName,
  inputComponent,
  componentProps,
}) => {
  const props = { ...componentProps, keyName };

  switch (inputComponent) {
    case 'TextInput':
      return <InputField {...props} />;
    case 'Picker':
      return <></>;
    default:
      return <></>;
  }
};

export default FormField;
