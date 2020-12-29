/* eslint-disable react-native/no-inline-styles */
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import InputExample from './examples/input/InputExample';
import PickerExamples from './examples/picker/PickerExamples';
import TxtExample from './examples/txt/TxtExample';
import StyleThemeExample from './examples/useStylesAndTheme/StylesThemeExample';
import { Container, createStyles, Txt } from './src';
import FormExample from './tests/From';

const Stack = createStackNavigator();

const useStyles = createStyles(() => ({
  root: { backgroundColor: 'white' },
  exRow: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  exDot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#416ce1',
    marginRight: 12,
  },
}));

const ExRow = ({ name, nested }: any) => {
  const styles = useStyles({ nested });

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(name)}
      style={styles.exRow}
    >
      <Container style={styles.exDot} />
      <Txt style={{ fontSize: 16 }}>{name}</Txt>
    </TouchableOpacity>
  );
};

const Initial = () => {
  const styles = useStyles();
  return (
    <Container grow style={styles.root}>
      <ExRow name="Styles and Theme" />
      <ExRow name="Txt" />
      <ExRow name="Picker" />
      <ExRow name="Input" />
      <ExRow name="Form" />
    </Container>
  );
};

export default function App() {
  return (
    <Container grow>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Examples"
          screenOptions={{ cardStyle: { backgroundColor: '#fff' } }}
        >
          <Stack.Screen name="Examples" component={Initial} />
          <Stack.Screen name="Styles and Theme" component={StyleThemeExample} />
          <Stack.Screen name="Txt" component={TxtExample} />
          <Stack.Screen name="Picker" component={PickerExamples} />
          <Stack.Screen name="Input" component={InputExample} />
          <Stack.Screen name="Form" component={FormExample} />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
}
