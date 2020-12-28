import { get } from 'lodash';
import React from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '../../theme';
import { sit, vou } from '../../utils';
import useDidMount from '../../utils/hooks/useDidMount';
import Container from '../Container';
import DefaultPickerComponent from './DefaultPickerComponent';
import PickerButton from './PickerButton';
import { defaultOptionType, PickerProps, PropsFromHook } from './types';

const dimensions = Dimensions.get('window');

const initialPosition = {
  px: 0,
  py: 0,
  width: 0,
  height: 0,
};

const Picker: React.FC<PickerProps & PropsFromHook> = ({
  index,
  setVisible,
  visible,
  setIndex,
  options,
  ...props
}) => {
  const theme = useTheme();

  /**
   * FootComponent, HeaderComponent, onPressPickerComponent, extraPickerComponentProps
   => Non theme props
   */
  const {
    FooterComponent,
    HeaderComponent,
    onPressPickerComponent, // Picker Component onPress override
    extraPickerComponentProps, // Extra Picker Component props
    ...themeOverrideProps
  } = props;

  /* Calculate final props based on prority (default -> variant -> direct props) */
  const finalProps: typeof themeOverrideProps = {
    ...get(theme, 'picker.default', {}),
    ...get(theme, `picker.${props.variant}`, {}),
    ...themeOverrideProps,
  };

  const myRef = React.createRef<View>(); // Picker Button Component wrapper ref

  /*
   * position is the absolute position of the root picker container (w.r.t Page/Screen) which
     will be calculated every time the picker is opened
   * position will only be used only if sticky prop is passed
   */
  const [position, setPosition] = React.useState<any>(initialPosition);
  /* contHeight -> height of picker button
   * contWidth -> width of picker button
   * Both will only be used only if sticky prop is passed
   */
  const [{ contHeight, contWidth }, setcontainerDim] = React.useState({
    contHeight: 0,
    contWidth: 0,
  });

  /* Set modal visible only after calculating position */
  useDidMount(() => {
    setVisible(true);
  }, [position]);

  const {
    PickerComponent = DefaultPickerComponent,
    bgContainerStyle, // Outermost container, background
    rootContainerStyle, // Outermost Picker Container (Root)
    pickerContainerStyle, // Container containing Picker Components
    modalProps,
    overrideTouchable, // flag if developer needs to overide Touchable Wrapper of PC.
  } = finalProps;

  /**
   * renderPCWrapper => PickerComponent Render Method
   * if overrideTouchable is not passed Touchable Component is encapsulated
     and if passed the developer is expected to implement Touchable Wrapper
   */
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
        onPress={(e) => {
          if (onPressPickerComponent) {
            onPressPickerComponent?.(idx, option, e);
          } else {
            setIndex(idx);
            setVisible(false);
          }
        }}
        key={idx}
      >
        {pc}
      </TouchableOpacity>
    ) : (
      pc
    );
  };

  const { align, sticky } = finalProps;

  /* Calculate absolute coordinates of Root Container according to align prop */
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

  /*
  * If sticky is passed calculate the absolute position of root container
   every time picker button is pressed or else just open the modal.
  * For sticky after setting the position we set modal visibility to true
  * The position is calculated every time because if the view is scrollable
    the absolute position w.r.t Page/Screen will change on every scroll.
  */
  const handlePressPickerButton = () => {
    if (sticky) {
      myRef.current?.measure((x, y, width, height, px, py) => {
        setPosition({
          px,
          py,
          width,
          height,
        });
      });
    } else {
      setVisible(true);
    }
  };

  return (
    <>
      <View ref={myRef} onLayout={() => {}}>
        <PickerButton
          handlePress={handlePressPickerButton}
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
            /* Close modal if touch outside the root container */
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
            /* Calculate the layout of root container to calculate absolute position
             according to align prop */
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

export default Picker;
