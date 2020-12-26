import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Txt } from '../../src';
import { useAlert } from '../../src/components/Alert/AlertContext';
import { CustomAlertComponent } from '../../src/components/Alert/types';

/**
 * Custom Header Component
 */
const HeaderComponent: CustomAlertComponent<{ myHeader: string }> = ({
  myHeader,
}) => {
  return <Txt style={{ fontSize: 20, color: 'gray' }}>{myHeader}</Txt>;
};

/**
 * Custom Footer Component
 */
// const FooterComponent: React.FC<{ title: string }> = ({ title }) => {
//   return <Txt style={{ fontSize: 20, color: 'gray' }}>{title}</Txt>;
// };

const AlertExample = () => {
  const { setAlertState } = useAlert();
  return (
    <TouchableOpacity
      onPress={() =>
        setAlertState((prev) => {
          return {
            ...prev,
            visible: true,
            title: 'Hello',
            buttonLeftText: 'Close',
            buttonRightText: 'Ok',
            HeaderComponent: (props) => (
              <HeaderComponent
                myHeader='This is my header through props!!'
                {...props}
              />
            ),
            variant: 'type1',
            modalProps: { transparent: true },
            textContent:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          };
        })
      }
    >
      <Txt>Click me</Txt>
    </TouchableOpacity>
  );
};

export default AlertExample;
