import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Input from '..';
import { tof } from '../../../utils';
import { InputProps } from '../types/types';

interface Props extends InputProps {
  show?: boolean | undefined;
}

const Password: React.FC<Props> = ({ show, ...rest }) => {
  const [toShow, setToShow] = useState<boolean>(false);

  console.log(toShow);

  return show ? (
    <Input
      {...rest}
      secureTextEntry={tof(toShow)}
      RightIcon={() =>
        toShow ? (
          <TouchableOpacity>
            <Entypo
              onPress={() => setToShow((prev) => !prev)}
              name='eye'
              size={20}
              color='black'
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Entypo
              onPress={() => setToShow((prev) => !prev)}
              name='eye-with-line'
              size={20}
              color='black'
            />
          </TouchableOpacity>
        )
      }
    />
  ) : (
    <Input {...rest} secureTextEntry={true} />
  );
};

export default Password;
