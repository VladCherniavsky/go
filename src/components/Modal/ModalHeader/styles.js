import {StyleSheet} from 'react-native';
import colors from '../../../constants/Colors';

const {LIGHT_GRAY} = colors;

export default StyleSheet.create({
  header: {
    minHeight: 40,
    width: '90%',
    flexDirection: 'row',
    borderBottomColor: LIGHT_GRAY,
    borderBottomWidth: 0.5,
    alignSelf: 'center'
  },
  header__content: {
    flex: 0.6,
  },
  header__right_block: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  header__left_block: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});
