import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Txt } from './src';

export default function App() {
  return (
    <Container grow centered>
      <StatusBar hidden />
      <Txt>Hello, World!</Txt>
    </Container>
  );
}
