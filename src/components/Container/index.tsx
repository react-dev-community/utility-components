import React from 'react';
import { FlexAlignType, FlexStyle, View, ViewProps, ScrollView, ViewStyle } from 'react-native';
import { FlexDirectionType, FlexJustifyType, ViewType, ScrollViewProps, layoutStyles } from '../../types';
import { vou, hasKey } from '../../utils';
import { isNumber, isString, get } from 'lodash';
import { useTheme } from '../../theme';

export interface ContainerProps extends ViewProps, ScrollViewProps {
  variant?: string;
  viewType?:ViewType;
  justify?: FlexJustifyType;
  alignItems?: FlexAlignType;
  direction?: FlexDirectionType;
  row?: boolean;
  centered?: boolean;
  border?: boolean | string;
  grow?: number | boolean;
  positionStyle?:string;
}

const Container: React.FC<ContainerProps> = ({
  variant,
  viewType,
  children,
  alignItems,
  direction,
  justify,
  row,
  centered,
  border,
  grow,
  positionStyle,
  ...props
}) => {
  const { style, ...restProps } = props;

  const flexStyle: FlexStyle = {
    justifyContent: justify || vou(centered, 'center'),
    alignItems: alignItems || vou(centered, 'center'),
    flexDirection: direction || vou(row, 'row'),
    flex: vou(grow as boolean, isNumber(grow) ? grow : 1),
    ...(border
      ? {
          borderWidth: 1,
          borderColor: vou(isString(border), border),
        }
      : {}),
  };

    //Margin and Padding props
    let keyValue = layoutStyles
    let styles = {};
    if(positionStyle)
    {
      let layoutProps = positionStyle.split(' ');
      layoutProps.forEach((element: string) => {
        const res = element.split('-');
        const key = res[0];
        const val = res[1];
        if(hasKey(keyValue, key)){
          // const ele = {[keyValue[key]]:val}
          const key1 = keyValue[key]
          const ele: any = {[key1]: undefined}
          ele[key1] = +val
          styles = { ...styles, ...ele };
        }
        else{
          console.log('Invalid key type')
        }
    });
    }
  // Extracting theme and variant
  const theme = useTheme();
  const type = (props as any).type;
  const variantValue = variant || type;
  const themeStyle = get(theme, `containers.${variantValue}`, {});
  // If variant is present ignore default
  const defaultThemeStyle = variantValue
    ? {}
    : get(theme, 'containers.default', {});
  // Selecting ScrollView or Default View
  if(viewType === 'scrollView' ){
      return (
    <ScrollView
      contentContainerStyle={{
        ...defaultThemeStyle,
        ...flexStyle,
        ...styles,
        ...themeStyle,
        ...(style as {}),
      }}
      {...restProps}
    >
      {children}
    </ScrollView>
  );
  }
  else{
  return (
    <View
      style={{
        ...defaultThemeStyle,
        ...flexStyle,
        ...styles,
        ...themeStyle,
        ...(style as {}),
      }}
      {...restProps}
    >
      {children}
    </View>
  );
  }
};


export default Container;
