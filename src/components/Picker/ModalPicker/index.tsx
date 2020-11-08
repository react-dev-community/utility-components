import { get } from 'lodash';
import React, { useState } from 'react';
import { Dimensions, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme';
import Container from '../../Container';
import PickerButton from '../PickerButton';
import { defaultOptionType, ModalPickerProps, PropsFromHook } from './types';

const { height, width } = Dimensions.get('window');

const useModalPicker = (options: defaultOptionType[]) => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  return {
    pickerProps: {
      visible,
      setVisible,
      index,
      setIndex,
      options,
    },
    currentOption: options[index],
  };
};

const ModalPicker: React.FC<ModalPickerProps & PropsFromHook> = ({
  index,
  setVisible,
  visible,
  setIndex,
  options,
  ...props
}) => {
  const theme = useTheme();

  const {
    FooterComponent,
    HeaderComponent,
    onPressPickerComponent,
    extraPickerComponentProps,
    ...themeOverridProps
  } = props;

  const finalProps: typeof themeOverridProps = {
    ...get(theme, 'picker.default', {}),
    ...themeOverridProps,
  };

  const {
    PickerComponent = () => <></>,
    pickerContainerStyle,
    modalContainerStyle,
    backgroundStyle,
    modalProps,
    overrideTouchable,
  } = finalProps;

  const renderPCWrapper = (option: defaultOptionType, idx: number) => {
    const pc = (
      <PickerComponent
        option={option}
        isActive={idx === index}
        idx={idx}
        key={idx}
        {...extraPickerComponentProps}
      />
    );

    return !overrideTouchable ? (
      <TouchableOpacity
        onPress={
          onPressPickerComponent ||
          (() => {
            setIndex(idx);
            setVisible(false);
          })
        }
        key={idx}
      >
        {pc}
      </TouchableOpacity>
    ) : (
      pc
    );
  };

  return (
    <>
      <PickerButton
        handlePress={() => setVisible(true)}
        title={options[index].title}
      />
      <Modal
        visible={visible}
        onRequestClose={() => setVisible(false)}
        animationType="slide"
        transparent
        {...modalProps}
      >
        <Container
          grow
          centered
          style={{
            ...styles.outercontainer,
            ...backgroundStyle,
          }}
        >
          <Container
            style={{
              ...styles.innerContainer,
              ...modalContainerStyle,
            }}
          >
            {HeaderComponent}
            <Container
              style={{
                ...pickerContainerStyle,
              }}
            >
              {options.map(renderPCWrapper)}
            </Container>
            {FooterComponent}
          </Container>
        </Container>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  outercontainer: {
    width,
    height,
    backgroundColor: '#00000070',
  },
  innerContainer: {
    backgroundColor: 'white',
  },
});

export { ModalPicker, useModalPicker };
