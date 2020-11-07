import { get } from 'lodash';
import React, { useState } from 'react';
import {
  Modal,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../../../theme';
import Container from '../../Container';
import PickerButton from '../PickerButton';

const { height, width } = Dimensions.get('window');

type defaultOptionType = { title: string; value: string };

interface ModalPickerProps {
  PickerComponent?: React.FC<{ option: defaultOptionType; isActive: boolean }>;
  variant?: string;
  HeaderComponent?: JSX.Element;
  FooterComponent?: JSX.Element;
  pickerContainerStyle?: ViewStyle;
  modalContainerStyle?: ViewStyle;
  backgroundStyle?: ViewStyle;
}

interface PropsFromHook {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  options: defaultOptionType[];
}

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
  PickerComponent: PropPickerComponent,
  index,
  setVisible,
  visible,
  setIndex,
  options,
  FooterComponent,
  HeaderComponent,
  pickerContainerStyle,
  modalContainerStyle,
  backgroundStyle,
}) => {
  const theme = useTheme();

  const defaultContainerStyle = get(theme, 'picker.default.modalContainer', {});
  const defaultPickerContainerStyle = get(
    theme,
    'picker.default.pickerContainerStyle',
    {}
  );
  const defaultBGStyle = get(theme, 'picker.default.backgroundStyle', {});
  const PickerComponent = get(
    theme,
    'picker.default.PickerComponent',
    PropPickerComponent
  );

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
      >
        <Container
          grow
          centered
          style={{
            ...styles.outercontainer,
            ...defaultBGStyle,
            ...backgroundStyle,
          }}
        >
          <Container
            style={{
              ...styles.innerContainer,
              ...defaultContainerStyle,
              ...modalContainerStyle,
            }}
          >
            {HeaderComponent}
            <Container
              style={{
                ...defaultPickerContainerStyle,
                ...pickerContainerStyle,
              }}
            >
              {options.map((option, idx) => (
                <TouchableOpacity
                  onPress={() => {
                    setIndex(idx);
                    setVisible(false);
                  }}
                  key={idx}
                >
                  <PickerComponent option={option} isActive={idx === index} />
                </TouchableOpacity>
              ))}
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
