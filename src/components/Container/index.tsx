import React from 'react';
import { FlexAlignType, FlexStyle, View, ViewProps } from 'react-native';
import { FlexDirectionType, FlexJustifyType } from '../../types';

interface Props extends ViewProps {
  justify?: FlexJustifyType;
  alignItems?: FlexAlignType;
  direction?: FlexDirectionType;
  row?: boolean;
  centered?: boolean;
  border?: boolean | string;
  grow?: number | boolean;
}

const Container: React.FC<Props> = ({
  children,
  alignItems,
  direction,
  justify,
  row,
  centered,
  border,
  grow,
  ...props
}) => {
  const { style, ...restProps } = props;

  // We will have lot of such optional object creations based on props
  // We will need some effient way or better way to handle this.

  const flexStyle: FlexStyle = {
    justifyContent: justify || (centered ? 'center' : undefined),
    alignItems: alignItems || (centered ? 'center' : undefined),
    flexDirection: direction || (row ? 'row' : 'column'),
    ...(border
      ? {
          borderWidth: 1,
          borderColor: typeof border === 'string' ? border : undefined,
        }
      : {}),
    flex: typeof grow === 'number' ? grow : 1,
  };

  return (
    <View style={{ ...flexStyle, ...(style as {}) }} {...restProps}>
      {children}
    </View>
  );
};

export default Container;
