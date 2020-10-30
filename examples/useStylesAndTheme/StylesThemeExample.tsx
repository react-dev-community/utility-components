import React from 'react';
import { createStyles, createTheme, ThemeProvider, useTheme } from '../../src';
import { Container, Txt } from '../../src/components';

// Parent
const themeValue = createTheme({
  text: {
    variant1: { fontSize: 16, color: 'blue' },
    subtitle: { fontSize: 20, color: '#444' },
  },
});

const StyleThemeExample = () => {
  return (
    <ThemeProvider theme={themeValue}>
      <Child />
    </ThemeProvider>
  );
};

// Child
const useStyles = createStyles((props: any, theme: any) => ({
  text1: theme.text.subtitle,
  text2: { color: props.disabled ? 'red' : 'green' },
}));

const Child = () => {
  const theme = useTheme();
  const styles = useStyles({ disabled: true });

  return (
    <Container centered grow row>
      <Txt style={styles.text1}>Text1</Txt>
      <Txt style={styles.text2}>Text2</Txt>
      <Txt style={theme.text?.variant1}>Text3</Txt>
    </Container>
  );
};

export default StyleThemeExample;
