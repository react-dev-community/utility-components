import React from 'react';
import {
  StyleSheet,
  // Pressable,
  // PressableProps,
  TouchableHighlightProps,
  TouchableHighlight,
  ButtonProps,
  ViewStyle,
} from 'react-native';
import { Container } from '..';
import Txt from '../Txt';
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface Props
  extends TouchableHighlightProps,
    Omit<ButtonProps, 'onPress' | 'disabled'> {
  mode?: 'text' | 'outlined' | 'contained';
  rounded?: number;
  startIcon?: string;
  endIcon?: string;
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
    borderRadius: props.rounded,
  };

  return (
    <TouchableHighlight {...props}>
      <Container
        centered
        style={{ ...(props.style as {}), ...ButtonStyle }}
        direction="row"
      >
        {props.startIcon && (
          <MaterialCommunityIcons
            name={props.startIcon}
            size={24}
            color={textColor.toString()}
            // style={{
            //   paddingRight: ButtonStyle.paddingHorizontal,
            // }}
          />
        )}
        <Txt style={{ color: textColor }}>{props.title}</Txt>
        {props.endIcon && (
          <MaterialCommunityIcons
            name={props.endIcon}
            size={24}
            color={textColor.toString()}
            // style={{
            //   paddingLeft: ButtonStyle.paddingHorizontal,
            // }}
          />
        )}
      </Container>
    </TouchableHighlight>
  );
};

export default Button;
