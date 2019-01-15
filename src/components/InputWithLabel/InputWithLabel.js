import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const InputWitLabel = ({value = null, label, onPress, placeholder, style, labelStyle, textStyle, touchableStyle = null}) => (
  <View style={style}>
    <Text style={labelStyle}>{label}</Text>
    <TouchableOpacity
      style={touchableStyle}
      onPress={onPress}>
      <Text style={textStyle}>{value ? value : placeholder}</Text>
    </TouchableOpacity>
  </View>
);

export default InputWitLabel;
