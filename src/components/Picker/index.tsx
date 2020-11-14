import { get } from 'lodash';
import React, { useState } from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '../../theme';
import { sit, vou } from '../../utils';
import Container from '../Container';
import PickerButton from './PickerButton';
import { defaultOptionType, PickerProps, PropsFromHook } from './types';

const dimensions = Dimensions.get('window');

const initialPosition = {
  px: 0,
  py: 0,
  width: 0,
  height: 0,
};

const usePicker = (options: defaultOptionType[]) => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [positionState, setPositionState] = React.useState(true);

  return {
    pickerProps: {
      visible,
      setVisible,
      index,
      setIndex,
      options,
      positionState,
      setPositionState: () => setPositionState((prev) => !prev),
    },
    currentOption: options[index],
  };
};

const Picker: React.FC<PickerProps & PropsFromHook> = ({
  index,
  setVisible,
  visible,
  setIndex,
  options,
  positionState,
  ...props
}) => {
  const theme = useTheme();

  const {
    FooterComponent,
    HeaderComponent,
    onPressPickerComponent,
    extraPickerComponentProps,
    ...themeOverrideProps
  } = props;

  const finalProps: typeof themeOverrideProps = {
    ...get(theme, 'picker.default', {}),
    ...get(theme, `picker.${props.variant}`, {}),
    ...themeOverrideProps,
  };

  const { align, sticky } = finalProps;

  const myRef = React.createRef<View>();
  const [position, setPosition] = React.useState<any>(initialPosition);
  const [{ contHeight, contWidth }, setcontainerDim] = React.useState({
    contHeight: 0,
    contWidth: 0,
  });

  React.useLayoutEffect(() => {
    if (sticky) {
      setTimeout(() => {
        myRef.current?.measure((x, y, width, height, px, py) => {
          setPosition({
            px,
            py,
            width,
            height,
          });
        });
      }, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [positionState, sticky]);

  const {
    PickerComponent = () => <></>,
    pickerContainerStyle,
    rootContainerStyle,
    bgContainerStyle,
    modalProps,
    overrideTouchable,
  } = finalProps;

  const renderPCWrapper = (option: defaultOptionType, idx: number) => {
    const pc = (
      <PickerComponent
        option={option}
        isActive={idx === index}
        idx={idx}
        key={idx}
        {...extraPickerComponentProps}
      />
    );

    return !overrideTouchable ? (
      <TouchableOpacity
        onPress={
          onPressPickerComponent ||
          (() => {
            setIndex(idx);
            setVisible(false);
          })
        }
        key={idx}
      >
        {pc}
      </TouchableOpacity>
    ) : (
      pc
    );
  };

  const processPosition = () => {
    switch (align) {
      case 'top':
        return {
          top: position.py - contHeight,
          left: position.px,
        };

      case 'left':
        return {
          top: position.py - contHeight + position.height,
          left: position.px - contWidth,
        };

      case 'right':
        return {
          top: position.py - contHeight + position.height,
          left: position.px + position.width,
        };

      case 'bottom':
      default:
        return {
          top: position.py + position.height,
          left: position.px,
        };
    }
  };

  return (
    <>
      <View ref={myRef} onLayout={() => {}}>
        <PickerButton
          handlePress={() => setVisible(true)}
          option={options[index]}
        />
      </View>
      <Modal
        visible={visible}
        onRequestClose={() => setVisible(false)}
        animationType={vou(!sticky, 'slide')}
        transparent
        {...modalProps}
      >
        <Container
          onStartShouldSetResponder={() => true}
          onResponderGrant={() => {
            setVisible(false);
          }}
          grow
          centered={!sticky}
          style={{
            ...styles.outercontainer,
            ...bgContainerStyle,
            position: vou(sticky, 'relative'),
            ...sit(sticky, {
              backgroundColor: 'transparent',
            }),
          }}
        >
          <Container
            onStartShouldSetResponder={() => true}
            style={{
              ...styles.innerContainer,
              ...rootContainerStyle,
              ...sit(sticky, {
                position: 'absolute',
                ...processPosition(),
              }),
            }}
            onLayout={({ nativeEvent: { layout } }) => {
              setcontainerDim({
                contHeight: layout.height,
                contWidth: layout.width,
              });
            }}
          >
            {HeaderComponent}
            <Container
              style={{
                ...pickerContainerStyle,
              }}
            >
              {options.map(renderPCWrapper)}
            </Container>
            {FooterComponent}
          </Container>
        </Container>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  outercontainer: {
    width: dimensions.width,
    height: dimensions.height,
    backgroundColor: '#00000070',
  },
  innerContainer: {
    backgroundColor: 'white',
  },
});

export { Picker, usePicker };
