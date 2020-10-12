import ThemeContext from './ThemeContext';
import React from 'react';

const ThemeProvider: React.FC<{ theme: any }> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
