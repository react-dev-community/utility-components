import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInputProps,
  TextStyle,
  View,
  TextInput,
} from "react-native";

interface Props extends TextInputProps {
  Label?: React.FC;
  validation?: (val: string) => boolean;
  CustomMsg?: React.FC;
  textInputStyle?: StyleProp<TextStyle> | null;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
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
}) => {
  const handleChange = (val: string) => {
    const isValidated: boolean = validation ? validation(val) : true;

    setValue(val);
    setIsValid(isValidated);
  };

  return (
    <View>
      {Label && <Label />}
      <TextInput
        value={value}
        onChangeText={handleChange}
        style={textInputStyle}
      />
      {!isValid && CustomMsg && <CustomMsg />}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Input;
