import React from 'react';
import { StatusBar } from 'react-native';
import PickerExamples from './examples/picker/PickerExamples';
import { Container } from './src';

export default function App() {
  return (
    <Container grow centered>
      <StatusBar hidden />
      <PickerExamples />
    </Container>
  );
}
