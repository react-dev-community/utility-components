import React from "react";
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
  validation?: string;
  CustomMsg?: React.FC;
  textInputStyle?: StyleProp<TextStyle> | null;
}

const Input: React.FC<Props> = ({
  Label,
  CustomMsg,
  value,
  onChangeText,
  textInputStyle,
}) => {
  return (
    <View>
      {Label && <Label />}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={textInputStyle}
      />
      {CustomMsg && <CustomMsg />}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Input;
