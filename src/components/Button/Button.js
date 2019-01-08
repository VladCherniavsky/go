import React from 'react';
import {TouchableOpacity, Text} from 'react-native';


const Button = ({onPressHandler, render, style}) => {
  return (
    <TouchableOpacity style={style}
      onPress={onPressHandler}>
      {render()}
    </TouchableOpacity>
  );
};

export default Button;
