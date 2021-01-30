import React from "react";
import { Container } from "../../src";
import Button from "../../src/components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";

export default () => {
  return (
    <Container grow centered>
      <Button
        mode="contained"
        title="Hello"
        color="yellow"
        rounded={5}
        onPress={console.log}
        startIcon={
          <MaterialCommunityIcons name="account" color="black"/>
          // <Image
          //   source={require('../../assets/icon.png')}
          // />
        }
      />
    </Container>
  );
};
