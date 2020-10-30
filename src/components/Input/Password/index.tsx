import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  TextInputProps,
} from "react-native";
import { vou, tof } from "../../../utils";

interface Props extends TextInputProps {
  show?: boolean | undefined;
  outlined?: boolean | undefined;
}

const Password: React.FC<Props> = ({ show, style, outlined, ...rest }) => {
  const [toShow, setToShow] = useState<boolean>(false);

  return (
    <View
      style={{
        ...styles.outerContainer,
        ...(outlined ? styles.outlinedContainer : null),
      }}
    >
      <TextInput {...rest} secureTextEntry={tof(toShow)} style={style} />
      {vou(
        show,
        <TouchableOpacity
          style={styles.innerContainer}
          onPress={() => setToShow((prevState) => !prevState)}
        >
          <Entypo name={toShow ? "eye-with-line" : "eye"} size={17} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    position: "relative",
    paddingHorizontal: 35,
  },

  innerContainer: {
    position: "absolute",
    top: 0,
    right: 0,
  },

  outlinedContainer: {
    borderWidth: 5,
    borderColor: "green",
    borderRadius: 5,
  },
});

export default Password;
