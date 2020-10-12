import React from 'react';
import { createTheme, ThemeProvider } from '../../src';
import { Container } from '../../src/components';
import Txt from '../../src/components/Txt';

// Parent
const themeValue = createTheme({
  text: {
    styles: { subtitle: { fontSize: 20, color: '#444' } },
    props: { onPress: () => console.log('This is great') },
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
      <Txt type="subtitle" style={{ color: 'red' }}>
        Text 2
      </Txt>
    </Container>
  );
};

export default TxtExample;
