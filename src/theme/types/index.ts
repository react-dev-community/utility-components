import { TextStyle } from 'react-native';

type VariantType<P, T = any> = { [K in keyof T]: P } & { default?: P };

type Foo<T> = {
  [K in keyof T]: { fontSize: number };
};

const foo = <T>(x: Foo<T> | Foo<any>): Foo<T> => {
  return x;
};

foo({ foo: { fontSize: 3 } });

type ButtonStyleProps = any;
type ContainerStyleProps = any;
type InputStyleProps = any;

// No generic part for now. Add later after a solid solution is known
export interface Theme<T = any> {
  color?: {
    primary?: string;
    secondary?: string;
  };
  text?: VariantType<TextStyle, T>;
  components?: {
    button?: VariantType<ButtonStyleProps>;
    /**  Will contain all the style related props for button

      *** ButtonStyleProps -> backgroundColor, textColor, iconColor, iconSize, paddingLeft, paddingRight
      *** Collect this style props process them in button and apply them accordingly

      // example.
      -> pictButton: { iconColor: 'red',  textColor: 'green', backgroundColor: 4, borderRadius: 10, paddingLeftRight: 10} */

    containers: VariantType<ContainerStyleProps>;
    input: VariantType<InputStyleProps>;
    // All the additional components will appear here
  };
}
