import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import {Linking, WebBrowser} from 'expo';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from '../../components/Button';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';
import {authCheckActionCreator} from '../../actions/actionCreators/authCheckActionCreators';
import {userFetchActionCreator} from '../../actions/actionCreators/userActionCreators';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      url_request: 'http://10.6.24.44:3000/auth/vkontakte'
    };
  }

  componentDidUpdate() {
    const {isLogged, userId} = this.props;
    const {navigate} = this.props.navigation;

    isLogged && navigate('Main');
    userId && this.props.getUser(userId);
  }

  handleGitHubLogin = async () => {
    const redirectUrl = await Linking.getInitialURL();
    const authUrl = this.state.url_request + `?redirectUrl=${redirectUrl}`;

    try {
      const authResult = await WebBrowser.openAuthSessionAsync(authUrl, redirectUrl);
      this.parseUrlToToken(authResult.url);
    } catch (err) {
      // eslint-disable-next-line
      console.log('ERROR:', err);
    }
  };

  parseUrlToToken = (url) => {
    const [, token] = url.match(/token=([^#]+)/);

    this.props.checkToken(token);
  };

  renderVkLabelAndIcon = () => (
    <View style={{flexDirection: 'row', flex: 1}}>
      <Text style={styles.buttonLabel}>Login with</Text>
      <Ionicons name={'logo-vk'} style={styles.buttonIcon} />
    </View>
  );

  render() {
    return (
      <View style={styles.loginContainer}>
        <Button
          onPressHandler={this.handleGitHubLogin}
          style={styles.loginButton}
          render={this.renderVkLabelAndIcon} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
    userId: state.auth.userId
  };
};

const mapActionsToProps = (dispatch) => (
  bindActionCreators({
    checkToken: authCheckActionCreator,
    getUser: userFetchActionCreator
  }, dispatch)
);

LoginContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }),
  checkToken: PropTypes.func,
  getUser: PropTypes.func,
  isLogged: PropTypes.bool,
  userId: PropTypes.string
};

export default connect(mapStateToProps, mapActionsToProps)(LoginContainer);
