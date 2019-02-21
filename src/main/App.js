/* eslint-disable no-undef */
import React from 'react';
import {Platform, StatusBar, StyleSheet, View, AppState} from 'react-native';
import {Asset, Font, Icon, registerRootComponent} from 'expo';
import AppNavigator from '../navigation/AppNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import StoreSingletone from '../store';
import sagas from '../sagas';

// eslint-disable-next-line
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
  GLOBAL.originalXMLHttpRequest :
  GLOBAL.XMLHttpRequest;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
    const storeAndPersistor = new StoreSingletone();
    this.store = storeAndPersistor.store;
    this.persistor = storeAndPersistor.persistor;
    this.store.runSaga(sagas);
  }
  componentDidMount() {
    this._loadResourcesAsync()
        .then(this._handleFinishLoading);
  }

  renderSplash = () => (<View style={{flex: 1, backgroundColor: 'red'}}></View>)


  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        this.renderSplash()
      );
    } else {
      return (
        <Provider store={this.store}>
          <PersistGate loading={this.renderSplash()} persistor={this.persistor}>
            <View style={styles.container}>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
              <AppNavigator />
            </View>
          </PersistGate>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('../../assets/images/robot-dev.png'),
        require('../../assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({isLoadingComplete: true});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  }
});

registerRootComponent(App);

export default App;
