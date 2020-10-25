import React from 'react';
import { Container, createTheme, ThemeProvider, Txt } from '../../src';

// Parent
const themeValue = createTheme({
  text: {
    subtitle: { fontSize: 20, color: '#444' },
    heading: { fontSize: 24, color: '#666' },
    default: { fontSize: 16, color: '#888', fontWeight: 'bold' },
  },
});

const TxtExample = () => {
  return (
    <ThemeProvider theme={themeValue}>
      <Child />
    </ThemeProvider>
  );
};

const Child: React.FC<any> = () => {
  return (
    <Container centered grow>
      <Txt>Default Text</Txt>
      <Txt variant="subtitle">Subtitle Text</Txt>
      <Txt variant="subtitle" style={{ color: 'blue' }}>
        Subtitle Text overide
      </Txt>
      <Txt variant="heading">Heading Text</Txt>
    </Container>
  );
};

export default TxtExample;
