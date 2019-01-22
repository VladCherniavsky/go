import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';

const {WHITE, RASPBERRY} = colors;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    justifyContent: 'center'
  },
  searchButton: {
    backgroundColor: RASPBERRY,
    marginTop: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    alignSelf: 'center'
  }
});
