import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class AuthenticationContainer extends React.Component {
  componentDidMount() {
    const {navigate} = this.props.navigation;
    setTimeout(() => {
      navigate('Main')
    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Attemt to authorize...</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

export default AuthenticationContainer;
