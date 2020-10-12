import React from 'react';
import { Text, TextProps } from 'react-native';
import { useTheme } from '../../theme';
import { get } from 'lodash';

interface Props extends TextProps {
  type?: string;
}

const Txt: React.FC<Props> = ({ type, children, ...props }) => {
  const theme = useTheme();

  const themeProps = get(theme, 'text.props', {});
  const themeStyle = get(theme, `text.styles.${type}`, {});

  const { style = {}, ...restProps } = props;

  return (
    <Text
      {...themeProps}
      {...restProps}
      style={{ ...themeStyle, ...(style as {}) }}
    >
      {children}
    </Text>
  );
};

export default Txt;
