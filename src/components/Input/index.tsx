import React, { useState } from "react";
import {
  TextInput,
  TextInputProps,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../../theme";

import { Entypo } from "@expo/vector-icons";

interface Props extends TextInputProps {
  //type?: string;
  //value?: string | undefined;
  type?: "password";
}

const Input: React.FC<Props> = ({ type, ...rest }) => {
  const [toShow, setToShow] = useState<boolean>(false);

  return (
    <View style={styles.outerContainer}>
      <TextInput
        {...rest}
        // textContentType={}
        secureTextEntry={type === "password" && (!toShow ? true : false)}
      />
      {type === "password" && (
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
    // backgroundColor: "green",
    // height: 100,
    // width: 200,
    paddingHorizontal: 35,
  },

  innerContainer: {
    position: "absolute",
    // justifyContent: "center",
    top: 0,
    right: 0,

    // backgroundColor: "pink",
  },
});

export default Input;
