import React, { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import Container from '../Container';

interface Props extends TextInputProps {
  Label?: React.FC;
  validation?: (val: string) => boolean;
  CustomMsg?: React.FC;
  textInputStyle?: StyleProp<TextStyle> | null;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  LeftIcon?: React.FC;
  RightIcon?: React.FC;
}

export const useInputComponent = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);

  return {
    inputProps: {
      value,
      setValue,
      isValid,
      setIsValid,
    },
  };
};

const Input: React.FC<Props> = ({
  Label,
  CustomMsg,
  value,
  setValue,
  isValid,
  setIsValid,
  textInputStyle,
  validation,
  LeftIcon,
  RightIcon,
}) => {
  const handleChange = (val: string) => {
    const isValidated: boolean = validation ? validation(val) : true;

    setValue(val);
    setIsValid(isValidated);
  };

  return (
    <Container>
      {Label && <Label />}
      <Container row alignItems='center'>
        {LeftIcon && <LeftIcon />}
        <TextInput
          value={value}
          onChangeText={handleChange}
          style={textInputStyle}
        />
        {RightIcon && <RightIcon />}
      </Container>
      {!isValid && CustomMsg && <CustomMsg />}
    </Container>
  );
};

const styles = StyleSheet.create({});

export default Input;
