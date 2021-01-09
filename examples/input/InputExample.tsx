import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { createTheme, ThemeProvider } from '../../src';
import Input, { useInputComponent } from '../../src/components/Input';
import Password from '../../src/components/Input/Password';
import {
  CustomMsgProps,
  LabelComponentProps,
} from '../../src/components/Input/types/types';

/**
 * Custom Label component -
 * Props - {
 *  content : string
 * }
 */
const LabelComponent: React.FC<LabelComponentProps> = ({ content }) => {
  return (
    <View>
      <Text style={{ color: 'dodgerblue' }}>{content}</Text>
    </View>
  );
};

/**
 * Custom Label component -
 * Props - {
 *  content : string,
 * isValid : boolean // Passed from Input Component based on validation state
 * }
 */
const CustomMessage: React.FC<CustomMsgProps> = ({ isValid, content }) => {
  if (!isValid) {
    return (
      <View>
        <Text style={{ color: 'red' }}>
          Theme message component : {content}
        </Text>
      </View>
    );
  }

  return null;
};

const myTheme = createTheme({
  input: {
    default: {
      LabelComponent,
      CustomMsg: CustomMessage,
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

    fire: {
      InnerContainerStyle: {
        backgroundColor: 'red',
      },
    },
  },
});

const InputExample = () => {
  const { inputProps } = useInputComponent('Initial Value');
  const { inputProps: inputProps2 } = useInputComponent('Initial Value 2');
  const { inputProps: passwordProps } = useInputComponent('Password');

  const Validation = (val: string, extraValidationData: any): boolean =>
    val.length >= 6;

  return (
    <ThemeProvider theme={myTheme}>
      {/*
        Input with CustomMsg used from theme
        and LabelComponent passed as prop
        */}
      <Input
        {...inputProps}
        LabelComponent={({ content }) => (
          <View>
            <Text style={{ color: 'green' }}>{content}</Text>
          </View>
        )}
        LabelProps={{ content: 'Email from 1st' }}
        CustomMsgProps={{ content: 'Message from 1st' }}
        shouldValidate
        validation={Validation}
        LeftIcon={() => (
          <MaterialIcons name='email' size={24} color='#c4c4c4' />
        )}
      />

      {/*
        Input with CustomMsg passed as a prop
        and LabelComponent used from theme
        */}
      <Input
        {...inputProps2}
        CustomMsg={({ content, isValid }) => {
          return !isValid ? (
            <View>
              <Text style={{ color: 'pink' }}>
                Custom message component : {content}
              </Text>
            </View>
          ) : null;
        }}
        LabelProps={{ content: 'Email from 2nd' }}
        CustomMsgProps={{ content: 'Message from 2nd' }}
        shouldValidate
        validation={Validation}
        LeftIcon={() => (
          <MaterialIcons name='email' size={24} color='#c4c4c4' />
        )}
      />

      <Password
        {...passwordProps}
        show
        LabelComponent={() => (
          <LabelComponent content='Password with custom icons' />
        )}
        VisibleIcon={<AntDesign name='eye' size={24} color='black' />}
        NotVisibleIcon={<Feather name='eye-off' size={24} color='black' />}
      />
    </ThemeProvider>
  );
};

export default InputExample;
