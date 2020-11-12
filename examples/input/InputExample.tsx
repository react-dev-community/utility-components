import React, { useState } from "react";
import Input from "../../src/components/Input";
import { View, Text } from "react-native";

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
  const [val, setVal] = useState("hello");
  return (
    <Input
      value={val}
      onChangeText={setVal}
      Label={LabelComponent}
      CustomMsg={CustomMessage}
      textInputStyle={{ backgroundColor: "pink" }}
    />
  );
};

export default InputExample;
