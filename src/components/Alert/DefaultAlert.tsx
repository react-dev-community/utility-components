import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import Container from '../Container';
import Txt from '../Txt';
import { useAlert } from './AlertContext';

const DefaultAlert = () => {
  const { alertState, setAlertState } = useAlert();
  const {
    title,
    textContent,
    buttonLeftText,
    buttonRightText,
    buttonLeftPress,
    buttonRightPress,
    visible,
  } = alertState;

  return (
    <Modal
      visible={visible}
      onRequestClose={() =>
        setAlertState((prev) => {
          return {
            ...prev,
            visible: false,
          };
        })
      }
      animationType='slide'
      transparent={true}
    >
      <View style={[styles.container]}>
        <Container>
          <Txt>{title}</Txt>
          <Txt>{textContent}</Txt>
        </Container>
      </View>
    </Modal>
  );
};

export default DefaultAlert;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000070',
  },
});
