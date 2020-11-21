import React from 'react';
import { Container } from '../../src';
import Button from '../../src/components/Button';

export default () => {
  return (
    <Container grow centered>
      {/* <Txt>Button Example</Txt> */}
      <Button
        mode="contained"
        title="Hello"
        color="red"
        onPress={console.log}
      />
    </Container>
  );
};
