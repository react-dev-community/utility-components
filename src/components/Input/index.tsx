<<<<<<< Updated upstream
import { get, merge } from 'lodash';
=======
import { get } from 'lodash';
>>>>>>> Stashed changes
import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '../../theme';
import { InputStyleProps } from '../../theme/types';
import Container from '../Container';
import { InputProps } from './types/types';

export const useInputComponent = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);

  const inputRef:
    | string
    | React.RefObject<TextInput>
    | ((instance: TextInput | null) => void)
    | null
    | undefined = useRef(null);

  return {
    inputProps: {
      value,
      setValue,
      isValid,
      setIsValid,
      inputRef,
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
  inputRef,
  variant,
  validation,
  LeftIcon,
  RightIcon,
  ...themeOverrideProps
}) => {
  const theme = useTheme();

  const { secureTextEntry } = themeOverrideProps;

  /* Calculate final props based on prority (default -> variant -> direct props) */
  const finalProps: InputStyleProps = merge(
    get(theme, `input.${variant || 'default'}`, {}),
    themeOverrideProps
  );

  const {
    InnerContainerStyle,
    OuterContainerStyle,
    textInputStyle,
    ...rest
  } = finalProps;

  console.log(finalProps);

  const handleChange = (val: string) => {
    const isValidated: boolean = validation ? validation(val) : true;

    setValue(val);
    setIsValid(isValidated);
  };

  return (
    <Container style={OuterContainerStyle}>
      {Label && <Label />}
      <Container row alignItems="center" style={InnerContainerStyle}>
        {LeftIcon && <LeftIcon />}
        <TextInput
          value={value}
          onChangeText={handleChange}
          style={[{ flex: 1 }, textInputStyle]}
          secureTextEntry={secureTextEntry}
          ref={inputRef}
          {...rest}
        />
        {RightIcon && <RightIcon />}
      </Container>
      {!isValid && CustomMsg && <CustomMsg />}
    </Container>
  );
};

export default Input;
