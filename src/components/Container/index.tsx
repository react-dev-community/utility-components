import React from 'react';
import { FlexAlignType, FlexStyle, View, ViewProps } from 'react-native';
import { FlexDirectionType, FlexJustifyType } from '../../types';
import { vou } from '../../utils';
import { isNumber, isString } from 'lodash';

export interface ContainerProps extends ViewProps {
  variant?: string;
  justify?: FlexJustifyType;
  alignItems?: FlexAlignType;
  direction?: FlexDirectionType;
  row?: boolean;
  centered?: boolean;
  border?: boolean | string;
  grow?: number | boolean;
}

const Container: React.FC<ContainerProps> = ({
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

  const flexStyle: FlexStyle = {
    justifyContent: justify || vou(centered, 'center'),
    alignItems: alignItems || vou(centered, 'center'),
    flexDirection: direction || vou(row, 'row'),
    flex: isNumber(grow) ? grow : 1,
    ...(border
      ? {
          borderWidth: 1,
          borderColor: vou(isString(border), border),
        }
      : {}),
  };

  // Add code to extract theme style variant of container (refer Txt)

  return (
    <View style={{ ...flexStyle, ...(style as {}) }} {...restProps}>
      {children}
    </View>
  );
};

export default Container;
