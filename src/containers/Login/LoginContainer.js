import React from 'react';
import {
  View,
  Text,
  Button,
  Alert
} from 'react-native';
import {Linking, WebBrowser} from 'expo';
export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectUrl: 'aaa',
      user: {},
      url_request: 'http://192.168.1.4:3002/auth/github'
    };
  }

  handleGitHubLogin = async () => {
    const redirectUrl = await Linking.getInitialURL();
    const authUrl = this.state.url_request;

    console.log('redirectUrl', redirectUrl)

    try {
      const authResult = await WebBrowser.openAuthSessionAsync(authUrl, redirectUrl);
      this.parseUrlToUser(authResult.url)
    } catch (err) {
      console.log('ERROR:', err);
    }

  };

  parseUrlToUser = (url) => {
    const [, user_string] = url.match(/user=([^#]+)/);
    const decodedUser = JSON.parse(decodeURI(user_string));

    this.setState({
      user: decodedUser
    }, () => {
      WebBrowser.dismissBrowser();
    });
  };

  render() {
    return (
      <View>
        <Text>Login Container</Text>
        <Text>redirectUrl : {this.state.redirectUrl}</Text>
        <Button title="Login with GitHub" onPress={this.handleGitHubLogin} />
        <Text>url_request - {this.state.url_request} </Text>
        <Text>githubLogin - {this.state.user.githubLogin}</Text>
        <Text>user_string - {this.state.urlString}</Text>
        <Text>NEW: {this.state.link}</Text>
      </View>
    );
  }
}
