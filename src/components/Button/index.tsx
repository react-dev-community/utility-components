import React from 'react';
import {
  StyleSheet,
  Pressable,
  PressableProps,
  ButtonProps,
  ViewStyle,
} from 'react-native';
import { Container } from '..';
import Txt from '../Txt';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface Props
  extends PressableProps,
    Omit<ButtonProps, 'onPress' | 'disabled'> {
  mode?: 'text' | 'outlined' | 'contained';
}

const Button: React.FC<Props> = ({ mode, ...props }) => {
  if (mode === undefined) {
    mode = 'text';
  }

  let backgroundColor, borderColor, textColor, borderWidth;
  if (mode === 'contained') {
    if (props.disabled) {
      backgroundColor = 'grey'; //should be 'rgba(black/white, 0.12) based on light/dark mode' as per Material guidelines
    }
    // Next preference should be given to theme.primary
    else {
      backgroundColor = props.color;
    }
  }

  if (mode === 'outlined') {
    borderColor = props.color; // should be 'rgba(black/white, 0.29) based on light/dark mode' as per Material guidelines
    borderWidth = StyleSheet.hairlineWidth;
  } else {
    borderColor = 'transparent';
    borderWidth = 0;
  }

  if (props.disabled) {
    textColor = 'grey'; // should be 'rgba(black/white, 0.32) based on light/dark mode' as per Material guidelines
  } else if (mode === 'contained') {
    textColor = 'black'; // should be black/white depending on theme
  } else if (props.color) {
    textColor = props.color;
  } else {
    textColor = 'black';
  } // should be theme.primary because it would be in outline or text mode

  const ButtonStyle: ViewStyle = {
    backgroundColor,
    borderColor,
    borderWidth,
    paddingVertical: 2,
    paddingHorizontal: 5,
  };

  return (
    <Pressable {...props}>
      <Container
        centered
        style={{ ...(props.style as {}), ...ButtonStyle }}
      >
        <Txt style={{ color: textColor }}>{props.title}</Txt>
      </Container>
    </Pressable>
  );
};

export default Button;
