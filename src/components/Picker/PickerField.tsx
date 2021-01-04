import React from 'react';
import Picker from '.';
import useFormField from '../Form/useFormField';
import { PickerProps, PickerPropsFromHook } from './types';

interface Props extends PickerProps {
  keyName: string;
}

export type PickerFieldProps = Omit<Props, keyof PickerPropsFromHook>;

const PickerField: React.FC<PickerFieldProps> = ({ keyName, ...restProps }) => {
  const { field, setFormFields } = useFormField(keyName);

  return (
    <Picker
      {...restProps}
      {...field.props}
      index={field.index ?? null}
      visible={field.visible || false}
      MessageComponent={field.shouldValidate && field.props.MessageComponent}
      setIndex={(idx: number) => {
        setFormFields((prev: any) => ({
          ...prev,
          [keyName]: {
            ...prev[keyName],
            index: idx,
            touched: true,
          },
        }));
      }}
      setVisible={(visible: boolean) => {
        setFormFields((prev: any) => ({
          ...prev,
          [keyName]: {
            ...prev[keyName],
            visible,
            touched: true,
          },
        }));
      }}
      setPickerState={(arg: any) => {
        if (typeof arg === 'function') {
          // If setState is called with prev Function
          setFormFields((prev: any) => ({
            ...prev,
            touched: true,
            [keyName]: {
              ...prev[keyName],
              ...arg({
                index: prev[keyName].index,
                visible: prev[keyName].visible,
              }),
            },
          }));
        } else {
          // If value is directly passed
          setFormFields((prev: any) => ({
            ...prev,
            [keyName]: { ...prev[keyName], touched: true, ...arg },
          }));
        }
      }}
    />
  );
};

export default PickerField;
