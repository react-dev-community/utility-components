import { get, merge } from 'lodash';
import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '../../theme';

import { TextInputRefType } from '../../types';
import useDidMount from '../../utils/hooks/useDidMount';
import Container from '../Container';
import { InputProps, InputStyleProps } from './types/types';

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
  CustomMsg,
  value,
  isValid,
  setState,
  inputRef,
  variant,
  validation,
  LeftIcon,
  RightIcon,
  shouldValidate = false,
  secureTextEntry = false,
  extraValidationData,
  ...themeOverrideProps
}) => {
  const theme = useTheme();
  console.log({ ...get(theme, `input.${variant || 'default'}`, {}) });
  /* Calculate final props based on prority (default -> variant -> direct props) */
  const finalProps: InputStyleProps = merge(
    { ...get(theme, `input.${variant || 'default'}`, {}) },
    themeOverrideProps
  );

  const {
    InnerContainerStyle,
    OuterContainerStyle,
    textInputStyle,
    LabelComponent,
    LabelProps,
    CustomMsgProps,
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
      {LabelComponent && <LabelComponent {...LabelProps} />}
      <Container row alignItems='center' style={InnerContainerStyle}>
        {LeftIcon && <LeftIcon />}
        <TextInput
          value={value}
          onChangeText={handleChange}
          style={[{ flex: 1 }, textInputStyle]}
          ref={inputRef}
          secureTextEntry={secureTextEntry}
          {...rest}
        />
        {RightIcon && <RightIcon />}
      </Container>
      {shouldValidate !== false && CustomMsg && (
        <CustomMsg isValid={isValid} {...CustomMsgProps} />
      )}
    </Container>
  );
};

export default Input;
