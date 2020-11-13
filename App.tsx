import React from 'react';
import { StatusBar, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, createStyles, Txt, useModalPicker, vou } from './src';
import { FloatingPicker } from './src/components/Picker';

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

export default function App() {
  const { pickerProps } = useModalPicker(options);

  return (
    <Container grow centered>
      <StatusBar hidden />
      <ScrollView onMomentumScrollEnd={pickerProps.setstate}>
        <View style={{ height: 1300, width: 360, backgroundColor: '#ddd' }} />
        <Container row>
          <Txt>Hey</Txt>
          <FloatingPicker {...pickerProps} PickerComponent={PickerComponent} />
        </Container>
        <View style={{ height: 1300, width: 360, backgroundColor: '#ddd' }} />
      </ScrollView>
    </Container>
  );
}
