import React, { useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import Container from '../../Container';
import PickerButton from '../PickerButton';

interface ModalPickerProps<T = { title: string; value: string }> {
  options: T[];
  PickerComponent: React.FC<{ option: T }>;
}

const useModalPicker = () => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  return {
    visible,
    setVisible,
    index,
    setIndex,
  };
};

const ModalPicker: React.FC<
  ModalPickerProps & ReturnType<typeof useModalPicker>
> = ({ options, PickerComponent, index, setVisible, visible, setIndex }) => {
  return (
    <>
      <PickerButton
        handlePress={() => setVisible(true)}
        title={options[index].title}
      />
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <Container>
          {options.map((option, idx) => (
            <TouchableOpacity
              onPress={() => {
                setIndex(idx);
                setVisible(false);
              }}
              key={idx}
            >
              <PickerComponent option={option} />
            </TouchableOpacity>
          ))}
        </Container>
      </Modal>
    </>
  );
};

export { ModalPicker, useModalPicker };
