import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { createTheme, ThemeProvider } from '../../src';
import Input, { useInputComponent } from '../../src/components/Input';
import Password from '../../src/components/Input/Password';

const LabelComponent: React.FC = () => {
  return (
    <View>
      <Text style={{ color: 'dodgerblue' }}>Email</Text>
    </View>
  );
};

const CustomMessage: React.FC = () => {
  return (
    <View>
      <Text style={{ color: 'red' }}>Length is less than 6</Text>
    </View>
  );
};

const myTheme = createTheme({
  input: {
    default: {
      OuterContainerStyle: { padding: 15 },
      InnerContainerStyle: {
        borderColor: 'dodgerblue',
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
      },
      textInputStyle: { paddingHorizontal: 10 },
    },
  },
});

const InputExample = () => {
  const { inputProps } = useInputComponent('Initial Value');
  const { inputProps: passwordProps } = useInputComponent('Password');

  const Validation = (val: string): boolean => val.length >= 6;

  return (
    <ThemeProvider theme={myTheme}>
      <Input
        {...inputProps}
        Label={LabelComponent}
        CustomMsg={CustomMessage}
        validation={Validation}
        LeftIcon={() => (
          <MaterialIcons name='email' size={24} color='#c4c4c4' />
        )}
      />
      <Password {...passwordProps} show />
    </ThemeProvider>
  );
};

export default InputExample;
