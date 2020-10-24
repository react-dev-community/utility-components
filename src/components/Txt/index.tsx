import React from 'react';
import { Text, TextProps } from 'react-native';
import { useTheme } from '../../theme';
import { get } from 'lodash';

interface Props extends TextProps {
  type?: string;
}

const Txt: React.FC<Props> = ({ type, children, ...props }) => {
  const theme = useTheme();
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
