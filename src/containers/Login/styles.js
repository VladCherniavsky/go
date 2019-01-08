import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';

const {WHITE, BLUE_VK} = colors;

export default StyleSheet.create({
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  loginButton: {
    backgroundColor: BLUE_VK,
    alignItems: 'center',
    width: '80%',
    height: '8%'
  },
  buttonLabel: {
    fontSize: 20,
    textAlignVertical: 'center',
    color: WHITE,
    justifyContent: 'center'
  },
  buttonIcon: {
    fontSize: 30,
    color: WHITE,
    alignSelf: 'center'
  }
});
