import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

export default useTheme;
