import React from 'react';
import { FlexAlignType, FlexStyle, View, ViewProps } from 'react-native';
import { FlexDirectionType, FlexJustifyType } from '../../types';
import { vou } from '../../utils';
import { isNumber, isString, get } from 'lodash';
import { useTheme } from '../../theme';
export interface ContainerProps extends ViewProps {
    variant?: string;
    justify?: FlexJustifyType;
    alignItems?: FlexAlignType;
    direction?: FlexDirectionType;
    row?: boolean;
    centered?: boolean;
    border?: boolean | string;
    grow?: number | boolean;
    positionStyle?: string;
}
const Container: React.FC<ContainerProps> = ({
    children,
    variant,
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
        flex: isNumber(grow) ? grow : 1,
        ...(border
            ? {
                  borderWidth: 1,
                  borderColor: vou(isString(border), border),
              }
            : {}),
    };
    //Margin and Padding props
    //helper function for checking type of keys of keyValue
  function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj
}
    //Margin and Padding props
      let keyValue = {
        'p': 'padding',
        'pl': 'paddingLeft',
        'pr': 'paddingRight',
        'pb': 'paddingBottom',
        'pt': 'paddingTop',
        'px': 'paddingHorizotal',
        'py': 'paddingVertical',
        'm': 'margin',
        'ml': 'marginLeft',
        'mr': 'marginRight',
        'mb': 'marginBottom',
        'mt': 'marginTop',
        'mx': 'marginHorizotal',
        'my': 'marginVertical',
    };
    let styles = {};
    if(positionStyle)
    {
      let layoutProps = positionStyle.split(' ');
      layoutProps.forEach((element: string) => {
        const res = element.split('-');
        const key = res[0];
        const val = res[1];
        if(hasKey(keyValue, key)){
          const key1 = keyValue[key]
          const ele = {}
          Object.defineProperty(ele,key1,{value:val})
          console.log(ele)
          styles = { ...styles, ...ele };
        }
        else{
          console.log('Invalid key type')
        }
    });
    }
    // Add code to extract theme style variant of container (refer Txt)
    const theme = useTheme();
    const type = (props as any).type;
    const variantValue = variant || type;
    const themeStyle = get(theme, containers.${variantValue}, {});
    // If variant is present ignore default
    const defaultThemeStyle = variantValue
        ? {}
        : get(theme, 'containers.default', {});
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
};
export default Container;