import React, { useState } from 'react';
import Input, { useInputComponent } from '../../src/components/Input';
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const LabelComponent: React.FC = () => {
  return (
    <View>
      <Text>Label Component</Text>
    </View>
  );
};

const CustomMessage: React.FC = () => {
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
};

const InputExample = () => {
  const { inputProps } = useInputComponent('Hello');

  const Validation = (val: string): boolean => val.length > 6;

  return (
    <Input
      {...inputProps}
      Label={LabelComponent}
      CustomMsg={CustomMessage}
      textInputStyle={{ backgroundColor: 'pink' }}
      validation={Validation}
      LeftIcon={() => <Entypo name='email' size={24} color='black' />}
    />
  );
};

export default InputExample;
