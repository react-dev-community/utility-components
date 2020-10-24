import { Theme } from './types';

const createTheme = <T = any>(theme: Theme<T>) => {
  return theme;
};

export default createTheme;
