import React, { useState } from 'react';
import { Modal } from 'react-native';
import Container from '../../Container';
import PickerButton from '../PickerButton';

interface ModalPickerProps<T = { title: string; value: string }> {
  options: T[];
  PickerComponent: React.FC<{ option: T }>;
}

const ModalPicker: React.FC<ModalPickerProps> = ({
  options,
  PickerComponent,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <Modal visible={visible} onRequestClose={() => setVisible(false)}>
      <Container>
        <PickerButton />
        {options.map((option) => (
          <PickerComponent option={option} />
        ))}
      </Container>
    </Modal>
  );
};

export default ModalPicker;
