import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Text, View, TextInput } from "react-native";
import { createTheme, ThemeProvider } from "../../src";
import Input, { useInputComponent } from "../../src/components/Input";
import Password from "../../src/components/Input/Password";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const LabelComponent: React.FC<{ content: string }> = ({ content }) => {
  return (
    <View>
      <Text style={{ color: "dodgerblue" }}>{content}</Text>
    </View>
  );
};

const CustomMessage: React.FC = () => {
  return (
    <View>
      <Text style={{ color: "red" }}>Length is less than 6</Text>
    </View>
  );
};

const myTheme = createTheme({
  input: {
    default: {
      OuterContainerStyle: { padding: 15 },
      InnerContainerStyle: {
        borderColor: "dodgerblue",
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
        backgroundColor: "red",
      },
    },
  },
});

const InputExample = () => {
  const { inputProps } = useInputComponent("Initial Value");
  const { inputProps: passwordProps } = useInputComponent("Password");

  const Validation = (val: string): boolean => val.length >= 6;

  useEffect(() => {
    // (inputProps.inputRef as React.RefObject<TextInput>).current?.focus();

    console.log(
      (inputProps.inputRef as React.RefObject<TextInput>).current?.isFocused()
    );
  }, []);

  return (
    <ThemeProvider theme={myTheme}>
      <Input
        {...inputProps}
        Label={() => <LabelComponent content='Email' />}
        CustomMsg={CustomMessage}
        validation={Validation}
        LeftIcon={() => (
          <MaterialIcons name='email' size={24} color='#c4c4c4' />
        )}
        variant='fire'
      />
      {/* Password with custom icons */}

      <Password
        {...passwordProps}
        show
        Label={() => <LabelComponent content='Password with custom icons' />}
        VisibleIcon={<AntDesign name='eye' size={24} color='black' />}
        NotVisibleIcon={<Feather name='eye-off' size={24} color='black' />}
      />

      {/* Password with default icons */}
      <Password
        Label={() => <LabelComponent content='Password with default icons' />}
        {...passwordProps}
        show
      />

      {/* Password with no icons */}
      <Password
        Label={() => <LabelComponent content='Password with no icons' />}
        {...passwordProps}
      />
    </ThemeProvider>
  );
};

export default InputExample;
