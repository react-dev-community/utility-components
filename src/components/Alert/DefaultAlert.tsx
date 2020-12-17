import React from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from '../Container';
import Txt from '../Txt';
import { useAlert } from './AlertContext';

const DefaultAlert = () => {
  const { alertState, setAlertState, closeModal } = useAlert();
  const {
    title,
    textContent,
    buttonLeftText,
    buttonRightText,
    buttonLeftPress,
    buttonRightPress,
    visible,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
  } = alertState;
  return (
    <Modal
      visible={visible}
      onRequestClose={closeModal}
      animationType='slide'
      transparent={true}
    >
      <View style={styles.container}>
        <Container style={styles.alertContainer}>
          {(HeaderComponent && HeaderComponent()) || (
            <Txt style={styles.title}>{title}</Txt>
          )}
          {(BodyComponent && BodyComponent()) || <Txt>{textContent}</Txt>}
          {(FooterComponent && FooterComponent()) || (
            <Container row style={{ marginVertical: 10 }}>
              {buttonLeftText && (
                <TouchableOpacity
                  onPress={() => {
                    buttonLeftPress?.();
                    closeModal();
                  }}
                  style={[{ marginRight: 5 }, styles.buttonStyle]}
                >
                  <Txt style={{ color: '#fff' }}>{buttonLeftText}</Txt>
                </TouchableOpacity>
              )}
              {buttonRightText && (
                <TouchableOpacity
                  onPress={() => {
                    buttonRightPress?.();
                    closeModal();
                  }}
                  style={[{ marginLeft: 5 }, styles.buttonStyle]}
                >
                  <Txt style={{ color: '#fff' }}>{buttonRightText}</Txt>
                </TouchableOpacity>
              )}
            </Container>
          )}
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
  alertContainer: {
    backgroundColor: '#fff',
    width: '75%',
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    paddingVertical: 3,
    borderRadius: 5,
  },
});
