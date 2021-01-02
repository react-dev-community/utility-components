import { defaultOptionType } from './types';

import React from 'react';

const usePicker = (options: defaultOptionType[]) => {
  const [{ index, visible }, setPickerState] = React.useState({
    index: 0,
    visible: false,
  });

  const setVisible = (flag: boolean) =>
    setPickerState((prev) => ({ ...prev, visible: flag }));

  const setIndex = (idx: number) =>
    setPickerState((prev) => ({ ...prev, index: idx }));

  return {
    pickerProps: {
      visible,
      index,
      options,
      setVisible,
      setIndex,
      setPickerState,
    },
    currentOption: options[index],
  };
};

export default usePicker;
