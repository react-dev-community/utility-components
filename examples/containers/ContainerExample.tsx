import React from 'react';
import { Container, createTheme, Txt, ThemeProvider } from '../../src';

const themeValue = createTheme({
  containers: {
    def1: {
      border: 1,
      flex: 2,
      borderColor: 'black',
      backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
    },
    def2: { borderColor: 'white', backgroundColor: 'red', height: 100 },
  },
});

const ContainerExample = () => {
  return (
    <ThemeProvider theme={themeValue}>
      <Container grow>
        <Container border="red" justify="flex-end" alignItems="flex-end">
          <Txt>Text 1</Txt>
        </Container>
        <Container border centered grow={2}>
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
        <Container variant="def1">
          <Txt>def1</Txt>
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default ContainerExample;
