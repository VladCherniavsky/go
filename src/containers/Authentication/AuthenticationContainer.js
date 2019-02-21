import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './styles';
import {authCheckActionCreator} from '../../actions/actionCreators/authCheckActionCreators';
import {userFetchActionCreator} from '../../actions/actionCreators/userActionCreators';
import {bindActionCreators} from 'redux';

class AuthenticationContainer extends React.PureComponent {
  componentDidMount() {
    const token = this.props.token;

    token
      ? this.props.checkToken(token)
      : this.props.navigation.navigate('Login');
  }

  componentDidUpdate() {
    const {navigate} = this.props.navigation;
    const {isLogged, userId} = this.props;
    isLogged ? navigate('Main') : navigate('Login');

    userId && this.props.getUser(userId);
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

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapActionsToProps = (dispatch) => (
  bindActionCreators({
    checkToken: authCheckActionCreator,
    getUser: userFetchActionCreator
  }, dispatch)
);

AuthenticationContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }),
  checkToken: PropTypes.func,
  getUser: PropTypes.func,
  isLogged: PropTypes.bool,
  token: PropTypes.string,
  userId: PropTypes.string
};

export default connect(mapStateToProps, mapActionsToProps)(AuthenticationContainer);
