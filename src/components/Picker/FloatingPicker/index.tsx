import { get } from 'lodash';
import React from 'react';
import { Dimensions, Modal, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme';
import Container from '../../Container';
import {
  defaultOptionType,
  ModalPickerProps,
  PropsFromHook,
} from '../ModalPicker/types';
import PickerButton from '../PickerButton';

const { height, width } = Dimensions.get('window');

const FloatingPicker: React.FC<ModalPickerProps & PropsFromHook> = ({
  index,
  setVisible,
  visible,
  setIndex,
  options,
  state: sta,
  ...props
}) => {
  const myRef = React.createRef<View>();
  const [state, setstate] = React.useState<any>({ px: 0, py: 0 });

  React.useLayoutEffect(() => {
    setTimeout(() => {
      myRef.current?.measure((x, y, wid, hei, px, py) => {
        const location = {
          x,
          y,
          px,
          py,
          width: wid,
          height: hei,
        };
        setstate({ ...location });
      });
    }, 0);
  }, [sta]);

  console.log(state, 'sss');

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
    ...themeOverrideProps,
  };

  const {
    PickerComponent = () => <></>,
    pickerContainerStyle,
    modalContainerStyle,
    backgroundStyle,
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
        animationType="slide"
        transparent
        {...modalProps}
      >
        <Container
          grow
          // centered
          style={{
            ...styles.outercontainer,
            ...backgroundStyle,
            position: 'relative',
          }}
        >
          <Container
            style={{
              ...styles.innerContainer,
              ...modalContainerStyle,
              position: 'absolute',
              top: state.py + state.height,
              left: state.px,
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
    width,
    height,
    backgroundColor: '#00000000',
  },
  innerContainer: {
    backgroundColor: 'white',
  },
});

export default FloatingPicker;
