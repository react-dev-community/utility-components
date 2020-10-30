import React from "react";
import Input from "../../src/components/Input";

const InputExample = () => {
  return (
    <Input
      value='hello'
      type='password'
      show
      style={{
        backgroundColor: "lightblue",
        paddingHorizontal: 15,
        paddingVertical: 5,
      }}
      outlined
    />
  );
};

export default InputExample;
