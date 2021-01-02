import { get, merge } from 'lodash';
import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '../../theme';
import { InputStyleProps } from '../../theme/types';
import { TextInputRefType } from '../../types';
import useDidMount from '../../utils/hooks/useDidMount';
import Container from '../Container';
import { InputProps } from './types/types';

export const useInputComponent = (initialValue: string) => {
  const [{ value, isValid }, setState] = useState<{
    value: string | undefined;
    isValid: boolean;
  }>({
    value: initialValue,
    isValid: true,
  });

  const inputRef: TextInputRefType = useRef(null);

  return {
    inputProps: {
      value,
      isValid,
      inputRef,
      setState,
    },
  };
};

const Input: React.FC<InputProps> = ({
  Label,
  CustomMsg,
  value,
  isValid,
  setState,
  inputRef,
  variant,
  validation,
  LeftIcon,
  RightIcon,
  shouldValidate,
  extraValidationData,
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

  const handleChange = (val: string) => {
    setState({
      isValid:
        validation && shouldValidate !== false
          ? validation(val, extraValidationData)
          : true,
      value: val,
    });
  };

  useDidMount(() => {
    if (validation && shouldValidate) {
      setState({
        value,
        isValid: validation(value, extraValidationData),
      });
    }
  }, [shouldValidate]);

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
      {shouldValidate !== false && CustomMsg && <CustomMsg isValid={isValid} />}
    </Container>
  );
};

export default Input;
