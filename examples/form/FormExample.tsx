import React from 'react';
import { Button, Text, View } from 'react-native';
import {
  createTheme,
  useForm,
  Form,
  InputField,
  ThemeProvider,
  Container,
} from '../../src';

const LabelComponent: React.FC<{ content: string }> = ({ content }) => {
  return (
    <View>
      <Text style={{ color: 'dodgerblue' }}>{content}</Text>
    </View>
  );
};

const CustomMessage: React.FC<any> = ({ isValid }) => {
  return (
    <>
      {!isValid && (
        <View>
          <Text style={{ color: 'red' }}>Length is less than 6</Text>
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
        marginVertical: 10,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
      },
    },
  },
});

const FromExample = () => {
  const form: any = useForm({
    firstName: {
      props: {
        placeholder: 'Ram',
        Label: () => <LabelComponent content="First Name" />,
        CustomMsg: CustomMessage,
        validation: (val: any) => {
          return val.length >= 6;
        },
      },
      value: '',
    },
    lastName: {
      props: {
        placeholder: 'Rajan',
        Label: () => <LabelComponent content="Last Name" />,
        CustomMsg: CustomMessage,
        validation: (val: any) => {
          return val.length >= 3;
        },
      },
      value: '',
    },
  });

  const fields = form.formFields();

  return (
    <ThemeProvider theme={myTheme}>
      <Form form={form}>
        <Container>
          <InputField
            keyName="firstName"
            InnerContainerStyle={{
              borderColor: !fields.firstName.shouldValidate
                ? 'dodgerblue'
                : fields.firstName.isValid
                ? 'green'
                : 'red',
            }}
            onBlur={() =>
              fields.firstName.setConfig({
                shouldValidate: true,
              })
            }
          />
          <InputField
            keyName="lastName"
            InnerContainerStyle={{
              borderColor: !fields.lastName.shouldValidate
                ? 'dodgerblue'
                : fields.lastName.isValid
                ? 'green'
                : 'red',
            }}
          />
        </Container>
        <Button
          onPress={() => console.log(form.isSubmissionValid())}
          title="Submit"
        />
      </Form>
    </ThemeProvider>
  );
};

export default FromExample;
