import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TouchableType } from '../../types';
import Txt from '../Txt';
import { defaultOptionType } from './types';

/** This is the actual picker button that will be visible to user
 * We will need a extract styles from theme and apply it so it is fully customizable
 */

interface PickerButtonProps {
  handlePress: TouchableType;
  option: defaultOptionType | null;
}

const PickerButton: React.FC<PickerButtonProps> = ({ handlePress, option }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        borderWidth: 1,
        alignSelf: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 4,
        backgroundColor: 'white',
        width: 130,
      }}
    >
      <Txt style={{ color: !option ? '#ccc' : 'black' }}>
        {option?.title || 'Please Select'}
      </Txt>
    </TouchableOpacity>
  );
};

export default PickerButton;
