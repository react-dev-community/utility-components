import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Input from "..";
import { tof, vou } from "../../../utils";
import { InputProps } from "../types/types";

interface Props extends InputProps {
  show?: boolean | undefined;
  VisibleIcon?: JSX.Element;
  NotVisibleIcon?: JSX.Element;
}

const Password: React.FC<Props> = ({
  show,
  VisibleIcon,
  NotVisibleIcon,
  RightIcon,
  ...rest
}) => {
  const [toShow, setToShow] = useState<boolean>(false);

  // Priority given :
  // 1) User provided icons (visible and notVisible icons) props
  // 2) Default icons
  // 3) Right Icon
  const RightIconDecider =
    (VisibleIcon &&
      NotVisibleIcon &&
      vou(show, () => (
        <TouchableOpacity onPress={() => setToShow((prev) => !prev)}>
          {toShow ? VisibleIcon : NotVisibleIcon}
        </TouchableOpacity>
      ))) ||
    vou(show, () => (
      <TouchableOpacity onPress={() => setToShow((prev) => !prev)}>
        <Entypo
          name={`eye${toShow ? "" : "-with-line"}`}
          size={20}
          color='black'
        />
      </TouchableOpacity>
    )) ||
    RightIcon;

  return (
    <Input
      {...rest}
      secureTextEntry={show ? tof(toShow) : true}
      RightIcon={RightIconDecider}
    />
  );
};

export default Password;
