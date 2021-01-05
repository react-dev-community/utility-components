import React from 'react';
import { Button, Text, View } from 'react-native';
import {
  Container,
  createTheme,
  Form,
  InputField,
  ThemeProvider,
  useForm,
} from '../../src';
import PickerField from '../../src/components/Picker/PickerField';

const LabelComponent: React.FC<{ content: string }> = ({ content }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={{ color: 'dodgerblue' }}>{content}</Text>
    </View>
  );
};

const CustomMessage: React.FC<any> = ({ isValid, message, showInvalid }) => {
  return (
    <>
      {(!isValid || showInvalid) && (
        <View>
          <Text style={{ color: isValid ? 'green' : 'red', fontSize: 10 }}>
            {message}
          </Text>
        </View>
      )}
    </>
  );
};

const myTheme = createTheme({
  input: {
    default: {
      OuterContainerStyle: { padding: 15 },
      InnerContainerStyle: {
        borderColor: 'dodgerblue',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
      },
    },
  },
  picker: {
    default: {
      buttonContainerStyle: { padding: 15 },
    },
  },
});

const FromExample = () => {
  const form: any = useForm({
    firstName: {
      type: 'TextInput',
      props: {
        placeholder: 'Ram',
        Label: () => <LabelComponent content="First Name" />,
        CustomMsg: (props: any) => (
          <CustomMessage {...props} message={'Length is less than 6'} />
        ),
        validation: (val: any) => {
          return val.length >= 6;
        },
        value: '',
      },
    },
    lastName: {
      type: 'TextInput',
      props: {
        placeholder: 'Rajan',
        Label: () => <LabelComponent content="Last Name" />,
        CustomMsg: (props: any) => (
          <CustomMessage {...props} message={'Length is less than 3'} />
        ),
        validation: (val: any) => {
          return val.length >= 3;
        },
        value: '',
      },
    },
    password: {
      type: 'TextInput',
      props: {
        placeholder: 'Password',
        Label: () => <LabelComponent content="Password" />,
        CustomMsg: (props: any) => (
          <CustomMessage {...props} message={'Length is less than 3'} />
        ),
        validation: (val: any, formLocal: any) => {
          formLocal.formFields().confirmPassword.setConfig({
            isValid: formLocal.values().confirmPassword === val,
          });
          return val.length >= 3;
        },
        secureTextEntry: true,
        value: '',
      },
    },
    confirmPassword: {
      type: 'TextInput',
      props: {
        placeholder: 'Confirm Password',
        Label: () => <LabelComponent content="Confirm Password" />,
        CustomMsg: (props: any) => (
          <CustomMessage
            {...props}
            message={props.isValid ? 'Passwords Match' : 'Passwords dont match'}
            showInvalid
          />
        ),
        validation: (val: any, formLocal: any) => {
          return (
            val === formLocal.values().password &&
            formLocal.values().password !== ''
          );
        },
        secureTextEntry: true,
        value: '',
      },
    },
    gender: {
      type: 'Picker',
      props: {
        options: [
          { title: 'Male', value: '1' },
          { title: 'Female', value: '2' },
        ],
        LabelComponent: () => <LabelComponent content="Gender" />,
        MessageComponent: (props: any) => (
          <CustomMessage {...props} message={'Please select gender'} />
        ),
      },
    },
    picker: {
      type: 'Picker',
      props: {
        index: 0,
        options: [
          { title: 'Option1', value: '1' },
          { title: 'Option2', value: '2' },
        ],
        LabelComponent: () => <LabelComponent content="Picker Example" />,
        sticky: true,
      },
    },
  });

  const fields = form.formFields();

  return (
    <ThemeProvider theme={myTheme}>
      <Form form={form}>
        <Container>
          <InputField
            keyName="firstName"
            // onBlur={() =>
            //   fields.firstName.setConfig({
            //     shouldValidate: true,
            //   })
            // }
          />
          <InputField keyName="lastName" />
          <InputField
            keyName="password"
            InnerContainerStyle={{
              borderColor: !fields.password.shouldValidate
                ? 'dodgerblue'
                : fields.password.isValid
                ? 'green'
                : 'red',
            }}
          />
          <InputField
            keyName="confirmPassword"
            InnerContainerStyle={{
              borderColor: !fields.confirmPassword.shouldValidate
                ? 'dodgerblue'
                : fields.confirmPassword.isValid
                ? 'green'
                : 'red',
            }}
          />
          <Container row>
            <PickerField keyName="gender" />
            <PickerField keyName="picker" />
          </Container>
        </Container>
        <Container style={{ padding: 15 }}>
          <Button
            onPress={() => console.log(form.isSubmissionValid())}
            title="Submit"
          />
        </Container>
      </Form>
    </ThemeProvider>
  );
};

export default FromExample;
