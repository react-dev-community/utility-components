import React from 'react';
import { createTheme, ThemeProvider } from '../../src';
import { Container } from '../../src/components';
import Txt from '../../src/components/Txt';

// Parent
const themeValue = createTheme({
  text: {
    subtitle: { fontSize: 20, color: '#444' },
    heading: { fontSize: 24, color: '#666' },
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
      <Txt type="subtitle">Text 1</Txt>
      <Txt type="subtitle" style={{ color: 'blue' }}>
        Text 2
      </Txt>
      <Txt type="heading">Text 3</Txt>
    </Container>
  );
};

export default TxtExample;
