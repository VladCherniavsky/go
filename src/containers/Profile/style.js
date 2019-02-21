import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  avatarContainer: {
    flex: 0.7
  },
  avatar: {
    flex: 1,
    backgroundColor: 'green'
  },
  userInfoBar: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  nameArea: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(102,102,102,.3)',
    marginLeft: '3%',
    marginBottom: '3%',
  },
  graiedArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(102,102,102,.3)'
  },
  name: {
    fontSize: 40,
    color: 'white'
  },
  userInfoBarItem: {
  },
  textBig: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  textSmall: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white'
  },
  starIcon: {
    fontSize: 25,
    color: 'yellow'
  }
});
