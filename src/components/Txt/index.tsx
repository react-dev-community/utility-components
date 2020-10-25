import React from 'react';
import { Text, TextProps } from 'react-native';
import { useTheme } from '../../theme';
import { get } from 'lodash';

export interface TxtProps extends TextProps {
  variant?: string;
}

const Txt: React.FC<TxtProps> = ({ variant, children, ...props }) => {
  const theme = useTheme();
  const type = (props as any).type;
  const variantValue = variant || type;
  const themeStyle = get(theme, `text.${variantValue}`, {});

  // If variant is present ignore default
  const defaultThemeStyle = variantValue ? {} : get(theme, 'text.default', {});

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
