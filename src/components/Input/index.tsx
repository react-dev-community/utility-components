import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import Password from "./Password";
import { useTheme } from "../../theme";
import { get } from "lodash";

interface Props extends TextInputProps {
  type?: "password";
  show?: boolean | undefined;
  variant?: string;
  outlined?: boolean | undefined;
}

const Input: React.FC<Props> = ({ type, variant, outlined, ...rest }) => {
  const theme = useTheme();

  const variantValue = variant;
  const themeStyle = get(theme, `text.${variantValue}`, {});

  // If variant is present ignore default
  const defaultThemeStyle = variantValue ? {} : get(theme, "input.default", {});

  const { style = {}, ...restProps } = rest;

  let Component;
  switch (type) {
    case "password":
      Component = (
        <Password
          style={{ ...defaultThemeStyle, ...themeStyle, ...(style as {}) }}
          outlined={outlined}
          {...restProps}
        />
      );
      break;

    default:
      break;
  }

  return Component;
};

const styles = StyleSheet.create({});

export default Input;
