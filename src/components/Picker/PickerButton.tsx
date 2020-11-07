import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TouchableType } from '../../types';
import Txt from '../Txt';

/** This is the actual picker button that will be visible to user
 * We will need a extract styles from theme and apply it so it is fully customizable
 */

interface PickerButtonProps {
  handlePress: TouchableType;
  title: string;
}

const PickerButton: React.FC<PickerButtonProps> = ({ handlePress, title }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={{ borderWidth: 1 }}>
      <Txt>{title}</Txt>
    </TouchableOpacity>
  );
};

export default PickerButton;
