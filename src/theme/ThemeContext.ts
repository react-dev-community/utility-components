import { Theme } from './types/index';
import React from 'react';

const ThemeContext = React.createContext<Theme>({});

export default ThemeContext;
