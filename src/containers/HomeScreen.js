import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import {WebBrowser} from 'expo';

import Button from '../components/Button';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  renderLabel = () => {
    return <Text>Search</Text>;
  };

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder={'From'}/>

        <TextInput
          style={styles.input}
          placeholder={'To'}/>

        <Button
          onPressHandler={() => {}}
          style={styles.searchButton}
          render={this.renderLabel} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchButton: {
    backgroundColor: 'red',
    marginTop: 10,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35
  },
  input: {
    width: '70%',
    borderWidth: 1,
    height: 30,
    marginTop: '5%',
    paddingLeft: '5%',
    fontSize: 30
  },
});
