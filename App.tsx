import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Txt } from './src';
import { ModalPicker, useModalPicker } from './src/components/Picker';

const options = [
  { title: 'Hello', value: '1' },
  { title: 'Hello1', value: '2' },
  { title: 'Hello3', value: '3' },
];

const PickerComponent = ({ option }: any) => (
  <Txt style={{ padding: 8, borderWidth: 1, marginBottom: 4 }}>
    {option.title}
  </Txt>
);

export default function App() {
  const pickerProps = useModalPicker();

  return (
    <Container grow centered>
      <StatusBar hidden />
      <ModalPicker
        {...pickerProps}
        options={options}
        PickerComponent={PickerComponent}
      />
    </Container>
  );
}
