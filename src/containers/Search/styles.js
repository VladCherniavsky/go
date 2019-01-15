import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';

const {WHITE, RASPBERRY} = colors;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchButton: {
    backgroundColor: RASPBERRY,
    marginTop: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35
  },
  textInputStyle: {
    fontSize: 17,
    paddingLeft: '3%'
  },
  datePickerButton: {
    marginTop: 10,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35
  },
  element: {
    width: '80%',
    flexDirection: 'row',
    marginBottom: '3%',
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    flex: 0.2
  },
  touchableStyle: {
    flex: 1,
    borderWidth: 1,
    height: '100%',
    justifyContent: 'center'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
    width: '90%',
    alignSelf: 'center'
  },
  listRaw: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    height: 40,
    justifyContent: 'center'
  },
  placePredictionListHeaderContent: {
    flex: 0.8
  },
  placePredictionListHeaderRightPart: {
    flex: 0.2
  }
});
