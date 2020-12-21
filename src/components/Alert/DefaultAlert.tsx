import { get } from 'lodash';
import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import { useTheme } from '../../theme';
import Container from '../Container';
import Txt from '../Txt';
import { useAlert } from './AlertContext';

const DefaultAlert = () => {
  const alert = useAlert();
  const theme = useTheme();

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
    modalProps,
    ...themeOverrideProps
  } = alertState;

  const finalProps: typeof themeOverrideProps = {
    ...get(theme, 'alert.default', {}),
    ...get(theme, `alert.${alertState.variant}`, {}),
    ...themeOverrideProps,
  };

  const {
    overlayContainerStyle,
    alertContainerStyle,
    headerStyle,
    bodyStyle,
    footerContainerStyle,
    footerLeftButtonStyle,
    footerRightButtonStyle,
    footerLeftTextStyle,
    footerRightTextStyle,
  } = finalProps;

  console.log(bodyStyle);

  return (
    <Modal
      visible={visible}
      onRequestClose={closeModal}
      animationType={modalProps?.animationType || 'slide'}
      {...modalProps}
    >
      <TouchableWithoutFeedback onPress={() => onOutsideClose && closeModal()}>
        <View style={[styles.container, overlayContainerStyle]}>
          <View style={[styles.alertContainer, alertContainerStyle]}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View>
                {(HeaderComponent && HeaderComponent()) || (
                  <Txt style={[styles.title, headerStyle]}>{title}</Txt>
                )}
                {(BodyComponent && BodyComponent()) || (
                  <Txt style={bodyStyle}>{textContent}</Txt>
                )}
                {(FooterComponent && FooterComponent()) || (
                  <Container
                    row
                    style={[styles.footerContainer, footerContainerStyle]}
                  >
                    {buttonLeftText && (
                      <TouchableOpacity
                        onPress={() => {
                          buttonLeftPress?.();
                          closeModal();
                        }}
                        style={[styles.LeftbuttonStyle, footerLeftButtonStyle]}
                      >
                        <Text style={[styles.text, footerLeftTextStyle]}>
                          {buttonLeftText}
                        </Text>
                      </TouchableOpacity>
                    )}
                    {buttonRightText && (
                      <TouchableOpacity
                        onPress={() => {
                          buttonRightPress?.();
                          closeModal();
                        }}
                        style={[
                          styles.RightbuttonStyle,
                          footerRightButtonStyle,
                        ]}
                      >
                        <Text style={[styles.text, footerRightTextStyle]}>
                          {buttonRightText}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </Container>
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
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
  text: {},
  footerContainer: {
    marginVertical: 10,
  },
});
