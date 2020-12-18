import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Container from '../Container';
import Txt from '../Txt';
import { useAlert } from './AlertContext';

const DefaultAlert = () => {
  const alert = useAlert();
  const { alertState, closeModal } = alert;
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
    onOutsideClose,
  } = alertState;
  return (
    <Modal
      visible={visible}
      onRequestClose={closeModal}
      animationType='slide'
      transparent={true}
    >
      <TouchableWithoutFeedback onPress={() => onOutsideClose && closeModal()}>
        <View style={styles.container}>
          <Container style={styles.alertContainer}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View>
                {(HeaderComponent && HeaderComponent()) || (
                  <Txt style={styles.title}>{title}</Txt>
                )}
                {(BodyComponent && BodyComponent()) || <Txt>{textContent}</Txt>}
                {(FooterComponent && FooterComponent()) || (
                  <Container row style={styles.footerContainer}>
                    {buttonLeftText && (
                      <TouchableOpacity
                        onPress={() => {
                          buttonLeftPress?.();
                          closeModal();
                        }}
                        style={styles.LeftbuttonStyle}
                      >
                        <Txt style={styles.text}>{buttonLeftText}</Txt>
                      </TouchableOpacity>
                    )}
                    {buttonRightText && (
                      <TouchableOpacity
                        onPress={() => {
                          buttonRightPress?.();
                          closeModal();
                        }}
                        style={styles.RightbuttonStyle}
                      >
                        <Txt style={styles.text}>{buttonRightText}</Txt>
                      </TouchableOpacity>
                    )}
                  </Container>
                )}
              </View>
            </TouchableWithoutFeedback>
          </Container>
        </View>
      </TouchableWithoutFeedback>
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
  RightbuttonStyle: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    paddingVertical: 3,
    borderRadius: 5,
    marginLeft: 5,
  },
  LeftbuttonStyle: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    paddingVertical: 3,
    borderRadius: 5,
    marginRight: 5,
  },
  text: {
    color: '#fff',
  },
  footerContainer: {
    marginVertical: 10,
  },
});
