import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  createStyles,
  createTheme,
  Picker,
  ThemeProvider,
  Txt,
  usePicker,
} from '../../src';
import { PickerComponentProps } from '../../src/components/Picker/types';

const useStyles = createStyles((props: any) => ({
  customPickerRow1: {
    color: props.isActive ? 'blue' : 'black',
    padding: 12,
    borderWidth: 1,
  },

  bgContainerStyle1: {
    backgroundColor: '#00000080',
    justifyContent: 'flex-end',
    paddingBottom: 24,
  },

  rootContainerStyle1: {
    padding: 16,
  },
  pickerContainerStyle1: {
    padding: 8,
    backgroundColor: '#dddddd80',
  },

  title: {
    padding: 16,
    fontSize: 15,
  },
  root: { backgroundColor: 'white' },
  modalCont: { borderBottomWidth: 1, borderColor: '#eee' },
  pickerRow: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
  },
}));

const PickerComponent = ({
  idx,
  isActive,
  option,
  ...extraProps
}: PickerComponentProps) => {
  const styles = useStyles({ isActive });

  console.log(extraProps);

  return (
    <Txt style={styles.customPickerRow1}>
      {idx + 1} {option.title}
    </Txt>
  );
};

const TouchableOverriddenPC = ({
  idx,
  isActive,
  option,
  ...extraProps
}: any) => {
  const styles = useStyles({ isActive });

  return (
    <TouchableOpacity
      onPress={() => {
        extraProps.setIndex(idx);
        extraProps.setVisible(false);
        console.log('My Touchable');
      }}
    >
      <Txt style={styles.customPickerRow1}>
        {idx + 1} {option.title}
      </Txt>
    </TouchableOpacity>
  );
};

const themeValue = createTheme({
  picker: {
    default: {
      rootContainerStyle: { borderWidth: 1 },
    },
    variant: {
      PickerComponent,
      bgContainerStyle: {
        justifyContent: 'flex-start',
        paddingTop: 32,
      },
      rootContainerStyle: {
        padding: 16,
        width: '80%',
      },
      pickerContainerStyle: {
        padding: 8,
        backgroundColor: '#dddddd80',
      },
      modalProps: { animationType: 'slide' },
    },
    'sticky-top-space': {
      rootContainerStyle: { marginTop: 6, borderWidth: 1 },
    },
  },
});

const options = [
  { title: 'Option1', value: '1' },
  { title: 'Option2', value: '2' },
  { title: 'Option3', value: '3' },
  { title: 'Option4', value: '4' },
];

const optionsSticky = [
  { title: 'Bottom', value: 'bottom' },
  { title: 'Left', value: 'left' },
  { title: 'Right', value: 'right' },
  { title: 'Top', value: 'top' },
];

const HeaderComponent = ({ value }: any) => (
  <Txt>Picker an option (Current Value {value})</Txt>
);

const PickerExamples = () => {
  const styles = useStyles();

  const {
    pickerProps: pickerProps1,
    currentOption: currentOption1,
  } = usePicker(options);

  const {
    pickerProps: pickerProps2,
    currentOption: currentOption2,
  } = usePicker(options);

  const { pickerProps: pickerProps3 } = usePicker(options);

  const { pickerProps: pickerProps4 } = usePicker(options);

  const {
    pickerProps: pickerPropsSticky,
    currentOption: currentOptionSticky,
  } = usePicker(optionsSticky);

  return (
    <ThemeProvider theme={themeValue}>
      <Container grow style={styles.root}>
        <Container style={styles.modalCont}>
          <Txt style={styles.title}>Modal Picker</Txt>
          <Container style={styles.pickerRow} row>
            <Txt>Default Picker = </Txt>
            {/* Default Picker Component */}
            <Picker {...pickerProps1} />
            {/* *** */}
            <Txt>
              (Title:- {currentOption1.title}, Value:- {currentOption1.value})
            </Txt>
          </Container>
          <Container style={styles.pickerRow} row>
            <Txt>Custom Picker 1= </Txt>
            {/* Custom Picker Component 1*/}
            <Picker
              {...pickerProps2}
              // Following props can be mentioned in theme as well
              PickerComponent={PickerComponent}
              bgContainerStyle={styles.bgContainerStyle1}
              rootContainerStyle={styles.rootContainerStyle1}
              pickerContainerStyle={styles.pickerContainerStyle1}
              overrideTouchable={false}
              modalProps={{ animationType: 'fade' }}
              // Following props can only be passed as props
              HeaderComponent={<HeaderComponent value={currentOption2.value} />}
              FooterComponent={
                <Txt onPress={() => pickerProps2.setVisible(false)}>Cancle</Txt>
              }
              extraPickerComponentProps={{ myExtraProp: 'value' }}
              onPressPickerComponent={(idx) => {
                console.log('Hello');
                pickerProps2.setIndex(idx);
              }}
            />
            {/* *** */}
          </Container>
          <Container style={styles.pickerRow} row>
            <Txt>Custom Picker 2 = </Txt>
            {/* Custom Picker Component 2*/}
            <Picker
              {...pickerProps3}
              variant="variant"
              overrideTouchable
              PickerComponent={TouchableOverriddenPC}
              extraPickerComponentProps={pickerProps3}
            />
            {/* *** */}
          </Container>
        </Container>
        <Container grow>
          <Txt style={styles.title}>Sticky Picker</Txt>
          <Container row style={styles.rootContainerStyle1}>
            {/* Sticky Picker Component 1*/}
            <Picker {...pickerPropsSticky} sticky variant="sticky-top-space" />
            {/* *** */}
          </Container>
          <Container grow centered>
            {/* Sticky Picker Component 2*/}
            <Picker
              {...pickerProps4}
              sticky
              align={currentOptionSticky.value as any}
            />
            {/* *** */}
          </Container>
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default PickerExamples;
