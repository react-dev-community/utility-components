import React from 'react';
import { StatusBar } from 'react-native';
import SimplePickerExample from './examples/picker/SimplePickerExample';
import { Container } from './src';

export default function App() {
  return (
    <Container grow>
      <StatusBar hidden />
      <SimplePickerExample />
    </Container>
  );
}
