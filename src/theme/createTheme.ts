import { Theme } from './types';

const createTheme = <T>(theme: Theme<T>) => {
  return theme;
};

export default createTheme;
