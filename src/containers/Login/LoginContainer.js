import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import {Linking, WebBrowser} from 'expo';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userFetchActionCreator} from '../../actions/actionCreators/userActionCreators';
import ButtonCustom from '../../components/Button/Button';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      showSpinner: false,
      url_request: 'http://10.0.75.1:3000/auth/vkontakte'
    };
  }

  handleGitHubLogin = async () => {
    const redirectUrl = await Linking.getInitialURL();
    const authUrl = this.state.url_request + `?redirectUrl=${redirectUrl}`;
    this.setState({
      authUrl: authUrl,
      showSpinner: true
    });

    try {
      const authResult = await WebBrowser.openAuthSessionAsync(authUrl, redirectUrl);
      this.parseUrlToUser(authResult.url);
    } catch (err) {
      // eslint-disable-next-line
      console.log('ERROR:', err);
    }
  };

  parseUrlToUser = (url) => {
    const [, userString] = url.match(/user=([^#]+)/);
    const decodedUser = JSON.parse(decodeURI(userString));

    this.setState({
      user: decodedUser,
      showSpinner: false
    }, () => {
      WebBrowser.dismissBrowser();
      const {navigate} = this.props.navigation;
      navigate('Main');
    });
  };

  renderVkLabelAndIcon = () => (
    <View style={{flexDirection: 'row', flex: 1}}>
      <Text style={styles.buttonLabel}>Login with </Text>
      <Ionicons name={'logo-vk'} style={styles.buttonIcon} />
    </View>
  );

  render() {
    return (
      <View style={styles.loginContainer}>
        <ButtonCustom
          onPressHandler={this.handleGitHubLogin}
          style={{backgroundColor: '#5b88bd', alignItems: 'center', width: '80%', height: '8%'}}
          render={this.renderVkLabelAndIcon} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapActionsToProps = (dispatch) => (
  bindActionCreators({
    fetchUserData: userFetchActionCreator
  }, dispatch)
);

LoginContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

export default connect(mapStateToProps, mapActionsToProps)(LoginContainer);
