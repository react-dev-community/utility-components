// Styles

import {
  GestureResponderEvent,
  StyleProp,
  TextInput,
  TextStyle,
} from "react-native";

export type FlexJustifyType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type FlexDirectionType =
  | "row"
  | "column"
  | "row-reverse"
  | "column-reverse";

export type TxtSty = StyleProp<TextStyle>;

export type VariantTypes<T> = keyof NonNullable<T>;

export type TouchableType =
  | ((event: GestureResponderEvent) => void)
  | undefined;

export type TextInputRefType =
  | string
  | React.RefObject<TextInput>
  | ((instance: TextInput | null) => void)
  | null
  | undefined;
