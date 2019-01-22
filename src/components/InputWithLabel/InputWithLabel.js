import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import styles from './styles';


const InputWitLabel = ({
  value = null,
  label,
  onPress,
  placeholder,
  style,
  labelStyle,
  textStyle,
  touchableStyle = null,
  shoudRenderInput,
  keyboardType,
  onChangeText
}) => (
  <View style={style}>
    <Text style={labelStyle}>{label}</Text>
    {
      shoudRenderInput
      ? <View style={touchableStyle}>
        <TextInput
          style={textStyle}
          keyboardType={keyboardType || 'default'}
          value={value}
          returnKeyType={'done'}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
      : <TouchableOpacity
        style={touchableStyle}
        onPress={onPress}>
        <Text style={value ? textStyle : styles.placeholderStyle}>
          {value ? value : placeholder}
        </Text>
      </TouchableOpacity>
    }

  </View>
);

export default InputWitLabel;
