import { defaultOptionType } from './types';

import React from 'react';

const usePicker = (options: defaultOptionType[]) => {
  const [visible, setVisible] = React.useState(false);
  const [index, setIndex] = React.useState(0);

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

export default usePicker;
