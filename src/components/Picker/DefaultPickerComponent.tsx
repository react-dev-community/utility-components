import React from 'react';
import { createStyles } from '../../styles';
import Txt from '../Txt';
import { PickerComponentProps } from './types';

const useStyles = createStyles((props: any) => ({
  text: { color: props.isActive ? 'blue' : 'black', padding: 12 },
}));

const DefaultPickerComponent = ({
  idx,
  isActive,
  option,
}: PickerComponentProps) => {
  const styles = useStyles({ isActive });

  return (
    <Txt style={styles.text}>
      {idx + 1} {option.title}
    </Txt>
  );
};

export default DefaultPickerComponent;
