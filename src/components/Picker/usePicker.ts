import { defaultOptionType } from './types';

import React from 'react';

const usePicker = (options: defaultOptionType[], intialIndex?: number) => {
  const [{ index, visible }, setPickerState] = React.useState({
    index: intialIndex ?? null,
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
    currentOption: index !== null ? options[index] : null,
  };
};

export default usePicker;
