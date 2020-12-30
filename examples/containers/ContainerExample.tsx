import React from 'react';
import { Container, Txt } from '../../src';

const ContainerExample = () => {
  return (
    <Container grow>
      <Container border="red" justify="flex-end" alignItems="flex-end" positionStyle='m-20'>
        <Txt>Text 1</Txt>
      </Container>
      <Container border centered grow={2} viewType='scrollView'>
        <Txt>Text 2</Txt>
      </Container>
      <Container border="green" row>
        <Txt>Text 2</Txt>
        <Txt>Text 3</Txt>
      </Container>
      <Container direction="row-reverse">
        <Txt>Text 4</Txt>
        <Txt>Text 5</Txt>
      </Container>
    </Container>
  );
};

export default ContainerExample;
