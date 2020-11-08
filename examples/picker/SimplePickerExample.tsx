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
  { title: 'Hello1', value: '1', icon: 'Icon', disabled: true },
  { title: 'Hello2', value: '2' },
  { title: 'Hello3', value: '3' },
];

const useStyles = createStyles((props: any) => ({
  pickerComp: {
    padding: 8,
    borderWidth: 1,
    // marginBottom: 4,
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
      modalContainerStyle: {
        width: '50%',
        padding: 8,
        borderRadius: 8,
      },
      backgroundStyle: {
        paddingBottom: 16,
      },
      pickerContainerStyle: {
        backgroundColor: '#ddd',
        justifyContent: 'center',
      },
    },
  },
});

const PickerExample = () => {
  const { pickerProps } = useModalPicker(options);

  return (
    <ThemeProvider theme={themeValue}>
      <Container grow style={{ padding: 16 }}>
        <StatusBar hidden />
        <ModalPicker {...pickerProps} />
      </Container>
    </ThemeProvider>
  );
};

export default PickerExample;
