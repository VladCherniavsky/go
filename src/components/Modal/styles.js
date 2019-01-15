import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';

const {LIME_GREEN} = colors;

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center'
  },
  close_button__label: {
    color: LIME_GREEN
  }
});
