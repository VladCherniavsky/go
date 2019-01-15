import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';

const {LIGHT_GRAY} = colors;

export default StyleSheet.create({
  list: {
    width: '90%',
    borderBottomColor: LIGHT_GRAY,
    borderBottomWidth: 0.5,
    alignSelf: 'center'
  }
});
