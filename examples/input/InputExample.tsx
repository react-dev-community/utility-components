import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { createTheme, ThemeProvider } from "../../src";
import Input, { useInputComponent } from "../../src/components/Input";
import Password from "../../src/components/Input/Password";
import { LabelComponentProps } from "../../src/components/Input/types/types";

const LabelComponent: React.FC<LabelComponentProps> = ({ content }) => {
  return (
    <View>
      <Text style={{ color: "dodgerblue" }}>{content}</Text>
    </View>
  );
};

const CustomMessage: React.FC = ({ isValid }) => {
  if (!isValid)
    return (
      <View>
        <Text style={{ color: "red" }}>Length is less than 6</Text>
      </View>
    );

  return null;
};

const myTheme = createTheme({
  input: {
    default: {
      LabelComponent,
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
  const { inputProps: passwordProps2 } = useInputComponent("Password again");

  const Validation = (val: string, extraValidationData: any): boolean =>
    val.length >= 6;

  console.log("input", inputProps.value);
  console.log("pass", passwordProps.value);

  const ref1 = inputProps.inputRef;
  const ref2 = passwordProps.inputRef;

  console.log(ref1 === ref2);

  return (
    <ThemeProvider theme={myTheme}>
      <Input
        {...inputProps}
        labelProps={{ content: "Email from theme" }}
        CustomMsg={CustomMessage}
        validation={Validation}
        //shouldValidate={true}
        LeftIcon={() => (
          <MaterialIcons name='email' size={24} color='#c4c4c4' />
        )}
      />

      {/* <Input
        {...inputProps}
        labelProps={{ content: "Email from theme 22" }}
        CustomMsg={CustomMessage}
        validation={Validation}
        shouldValidate={true}
        LeftIcon={() => (
          <MaterialIcons name='email' size={24} color='#c4c4c4' />
        )}
      /> */}
      {/* Password with custom icons */}

      <Password
        {...passwordProps}
        show
        // LabelComponent={() => (
        //   <LabelComponent content='Password with custom icons' />
        // )}
        maxLength={7}
        labelProps={{ content: "Password with custom icons" }}
        VisibleIcon={<AntDesign name='eye' size={24} color='black' />}
        NotVisibleIcon={<Feather name='eye-off' size={24} color='black' />}
      />

      {/* Password with default icons */}
      {/* <Password
        labelProps={{ content: "Password with default icons" }}
        maxLength={6}
        {...passwordProps2}
      /> */}
    </ThemeProvider>
  );
};

export default InputExample;
