import React from 'react';
import { Text, TextProps } from 'react-native';
import { useTheme } from '../../theme';
import { get } from 'lodash';

export interface TxtProps extends TextProps {}

const Txt: React.FC<TxtProps> = ({ children, ...props }) => {
  const theme = useTheme();
  const type = (props as any).type;
  const themeStyle = get(theme, `text.${type}`, {});

  // If variant is present ignore default
  const defaultThemeStyle = type ? {} : get(theme, 'text.default', {});

  const { style = {}, ...restProps } = props;

  return (
    <Text
      {...restProps}
      style={{ ...defaultThemeStyle, ...themeStyle, ...(style as {}) }}
    >
      {children}
    </Text>
  );
};

export default Txt;
