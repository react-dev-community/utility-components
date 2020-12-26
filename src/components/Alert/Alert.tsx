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
import { AlertContextType } from './types';

const DefaultFooter: React.FC<{ alert: Partial<AlertContextType> }> = ({
  alert,
}) => {
  const {
    footerContainerStyle,
    buttonLeftPress,
    footerLeftButtonStyle,
    footerLeftTextStyle,
    buttonLeftText,
    buttonRightText,
    buttonRightPress,
    footerRightButtonStyle,
    footerRightTextStyle,
  } = alert.alertState!;
  const { closeModal } = alert;
  return (
    <Container row style={[styles.footerContainer, footerContainerStyle]}>
      {buttonLeftText && (
        <TouchableOpacity
          onPress={() => {
            buttonLeftPress?.();
            closeModal?.();
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
            closeModal?.();
          }}
          style={[styles.RightbuttonStyle, footerRightButtonStyle]}
        >
          <Text style={[styles.text, footerRightTextStyle]}>
            {buttonRightText}
          </Text>
        </TouchableOpacity>
      )}
    </Container>
  );
};

const Alert = () => {
  const alert = useAlert();
  const theme = useTheme();

  const { alertState, closeModal } = alert;

  const {
    title,
    textContent,
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
  } = finalProps;

  return (
    <Modal
      visible={visible}
      onRequestClose={closeModal}
      animationType={modalProps?.animationType || 'slide'}
      {...modalProps}
    >
      {/*
        Outer TouchableWithoutFeedback helps close the modal on outside press
      */}
      <TouchableWithoutFeedback onPress={() => onOutsideClose && closeModal()}>
        <View style={[styles.container, overlayContainerStyle]}>
          <View style={[styles.alertContainer, alertContainerStyle]}>
            <TouchableWithoutFeedback onPress={() => {}}>
              {/*
                  OnPress is an empty function to override the press event of the Outer TouchableWithoutFeedback
                  so as to prevent modal from closing on pressing inside it.
                */}
              <View>
                {/*
                  Custom Header Component
                  Priority :
                    1) Custom Header
                    2) Default title header
                */}
                {(HeaderComponent && HeaderComponent(alert)) || (
                  <Txt style={[styles.title, headerStyle]}>{title}</Txt>
                )}

                {/*
                  Custom Body Component
                  Priority :
                    1) Custom Body
                    2) Default text content
                */}

                {(BodyComponent && BodyComponent(alert)) || (
                  <Txt style={bodyStyle}>{textContent}</Txt>
                )}

                {/*
                  Custom Footer Component
                  Priority :
                    1) Custom Footer
                    2) Default footer component (with 2 buttons)
                */}

                {(FooterComponent && FooterComponent(alert)) || (
                  <DefaultFooter alert={alert} />
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Alert;

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
