import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textInputStyle: {
    fontSize: 17,
    paddingLeft: '3%'
  },
  datePickerHeaderContent: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
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
