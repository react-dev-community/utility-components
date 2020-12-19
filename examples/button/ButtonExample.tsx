import React from "react";
import { Container } from "../../src";
import Button from "../../src/components/Button";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

export default () => {
  return (
    <Container grow centered>
      <Button
        mode="contained"
        title="Hello"
        color="yellow"
        rounded={5}
        onPress={console.log}
        startIcon="account"
      />
    </Container>
  );
};
