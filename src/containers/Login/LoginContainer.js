import React from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  Image,
  ActivityIndicator
} from 'react-native';
import {Linking, WebBrowser} from 'expo';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      showSpinner: false,
      url_request: 'http://35.195.178.113/auth/vkontakte'
    };
  }

  handleGitHubLogin = async () => {
    const redirectUrl = await Linking.getInitialURL();
    const authUrl = this.state.url_request + `?redirectUrl=${redirectUrl}`;
    this.setState({
      authUrl: authUrl,
      showSpinner: true
    });

    console.log('this', this.props);

    try {
      const authResult = await WebBrowser.openAuthSessionAsync(authUrl, redirectUrl);
      this.parseUrlToUser(authResult.url);
    } catch (err) {
      console.log('ERROR:', err);
    }

  };

  parseUrlToUser = (url) => {
    const [, user_string] = url.match(/user=([^#]+)/);
    const decodedUser = JSON.parse(decodeURI(user_string));

    console.log('decodedUser', decodedUser);

    this.setState({
      user: decodedUser,
      showSpinner: false
    }, () => {
      WebBrowser.dismissBrowser();
      const {navigate} = this.props.navigation;
      navigate('Main')
    });
  };

  render() {
    return (
      <View>
        <Text>Login Container</Text>
        <Button title="Login with VK" onPress={this.handleGitHubLogin} />
        <Text>Name: {this.state.user.displayName}</Text>
        <Image source={this.state.user.photos ? {uri: this.state.user.photos[2].value} : {}}
               style={{width: 300, height: 300}}/>
        <Text>authUrl: {this.state.authUrl}</Text>
        <ActivityIndicator size={100} color="#0000ff"  animating={this.state.showSpinner}/>
      </View>
    );
  }
}
