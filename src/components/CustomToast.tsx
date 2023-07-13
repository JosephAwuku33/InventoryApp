import React, { FC } from 'react';
import Toast from 'react-native-root-toast';

interface CustomToastProps {
  message: string;
  duration?: number;
}

const CustomToast: FC<CustomToastProps> = ({ message, duration }) => {
  // Customize the toast styles here
  const toastStyle = {
    backgroundColor: '#333',
    opacity: 0.9,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  };

  return (
    <Toast
      visible={!!message}
      position={Toast.positions.BOTTOM}
      shadow={false}
      animation={true}
      hideOnPress={true}
      delay={0}
      duration={duration || Toast.durations.LONG}
      style={toastStyle}
    >
      {message}
    </Toast>
  );
};

export default CustomToast;
