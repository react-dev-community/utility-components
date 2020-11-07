import * as React from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  createStyles,
  createTheme,
  ModalPicker,
  ThemeProvider,
  Txt,
  useModalPicker,
  vou,
} from '../../src';

const options = [
  { title: 'Hello1', value: '1', icon: 'Icon' },
  { title: 'Hello2', value: '2' },
  { title: 'Hello3', value: '3' },
];

const useStyles = createStyles((props: any) => ({
  pickerComp: {
    padding: 8,
    borderWidth: 1,
    marginBottom: 4,
    color: vou(props.isActive, 'blue'),
  },
}));

const PickerComponent = ({ option, isActive }: any) => {
  const styles = useStyles({ isActive });

  return (
    <Txt style={styles.pickerComp}>
      {option.title}
      {`${option.icon || ''}`}
    </Txt>
  );
};

const themeValue = createTheme({
  picker: {
    default: {
      PickerComponent,
      modalContainer: {
        width: '80%',
        padding: 8,
      },
      backgroundStyle: {
        backgroundColor: 'red',
      },
      pickerContainerStyle: {
        backgroundColor: '#ddd',
        padding: 8,
      },
    },
  },
});

const PickerExample = () => {
  const { pickerProps } = useModalPicker(options);

  return (
    <ThemeProvider theme={themeValue}>
      <Container grow centered>
        <StatusBar hidden />
        <ModalPicker {...pickerProps} />
      </Container>
    </ThemeProvider>
  );
};

export default PickerExample;
