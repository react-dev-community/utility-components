import React from 'react';
import { StatusBar } from 'react-native';
import TxtExample from './examples/txt/TxtExample';
import VariantTypeFormat from './examples/VariantTypeFormat/VariantTypeFormat';
import { Container, Txt } from './src';

export default function App() {
  return (
    <Container grow centered>
      <StatusBar hidden />
      <VariantTypeFormat />
    </Container>
  );
}
