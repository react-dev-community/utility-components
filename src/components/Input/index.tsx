import { get } from 'lodash';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '../../theme';
import { InputStyleProps } from '../../theme/types';
import Container from '../Container';
import { InputProps } from './types/types';

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

const Input: React.FC<InputProps> = ({
  Label,
  CustomMsg,
  value,
  setValue,
  isValid,
  setIsValid,
  validation,
  LeftIcon,
  RightIcon,
  ...themeOverrideProps
}) => {
  const theme = useTheme();

  const { secureTextEntry } = themeOverrideProps;

  /* Calculate final props based on prority (default -> variant -> direct props) */
  const finalProps: InputStyleProps = {
    ...get(theme, 'input.default', {}),
    ...themeOverrideProps,
  };

  const handleChange = (val: string) => {
    const isValidated: boolean = validation ? validation(val) : true;

    setValue(val);
    setIsValid(isValidated);
  };

  return (
    <Container style={finalProps.OuterContainerStyle}>
      {Label && <Label />}
      <Container row alignItems="center" style={finalProps.InnerContainerStyle}>
        {LeftIcon && <LeftIcon />}
        <TextInput
          value={value}
          onChangeText={handleChange}
          style={[{ flex: 1 }, finalProps.textInputStyle]}
          secureTextEntry={secureTextEntry}
        />
        {RightIcon && <RightIcon />}
      </Container>
      {!isValid && CustomMsg && <CustomMsg />}
    </Container>
  );
};

export default Input;
