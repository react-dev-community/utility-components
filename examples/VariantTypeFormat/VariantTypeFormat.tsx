import React from 'react';
import {
  Container,
  createTheme,
  ThemeProvider,
  Txt,
  VariantTypes,
} from '../../src';

// Parent
const themeValue = createTheme({
  text: {
    subtitle: { fontSize: 20, color: '#444' },
    subtitleCard: { fontSize: 24, color: '#666' },
  },
});

/**
 * The user will have to define the variant types in following format
 * '../../src' will be replaced by our package name for user
 * and props for the all components will be exported in /components
   so user can overide them here.
 * As in this example user is using Txt variant so user will have to
   overide the type prop of TxtProps as follows so that user will be able to
   get autocompletion for props type
 */
declare module '../../src' {
  interface TxtProps {
    type?: VariantTypes<typeof themeValue.text>;
  }
}

const VariantTypeFormat = () => {
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
      <Txt type="subtitle">Subtitle Variant Text</Txt>
      <Txt type="subtitle" style={{ color: 'blue' }}>
        Subtitle Variant Text overide
      </Txt>
      <Txt type="subtitleCard">Subtitle Card Variant Text</Txt>
    </Container>
  );
};

export default VariantTypeFormat;
