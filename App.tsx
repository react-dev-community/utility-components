import React from "react";
import { StatusBar } from "react-native";
import { Container, Txt } from "./src";
import Input from "./src/components/Input";

export default function App() {
  return (
    <Container grow centered>
      <StatusBar hidden />
      <Txt>Hello, World!</Txt>
      <Input value="Hello2" type="password" />
    </Container>
  );
}
