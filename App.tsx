import React from 'react';
import { StatusBar } from 'react-native';
import PickerExample from './examples/picker/PickerExample';
import { Container } from './src';

export default function App() {
  return (
    <Container grow centered>
      <StatusBar hidden />
      <PickerExample />
    </Container>
  );
}
