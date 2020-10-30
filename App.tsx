import React from "react";
import { StatusBar } from "react-native";
import { Container, Txt } from "./src";
import Input from "./src/components/Input";
import TxtExample from "./examples/txt/TxtExample";
import InputExample from "./examples/input/InputExample";

export default function App() {
  return (
    <Container grow centered>
      <StatusBar hidden />
      <InputExample />
    </Container>
  );
}
