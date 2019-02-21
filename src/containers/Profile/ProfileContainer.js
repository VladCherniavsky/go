import React from 'react';
import {ScrollView, Image, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Ionicons} from '@expo/vector-icons';
import styles from './style';


class ProfileContainer extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      avatarUrl: null,
    };
  }


  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      firstName: props.firstName,
      avatarUrl: props.avatarUrl,

    };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} >
        <View style={styles.avatarContainer}>
          <Image
            resizeMode={'cover'}
            source={{uri: this.state.avatarUrl}}
            style={styles.avatar} />

          <View style={styles.userInfoBar}>

            <View style={styles.nameArea}>
              <Text style={styles.name}>Vlad</Text>
            </View>

            <View style={styles.graiedArea}>
              <View style={styles.userInfoBarItem}>
                <Text style={styles.textBig}>25</Text>
                <Text style={styles.textSmall}>Years</Text>
              </View>

              <View style={styles.userInfoBarItem}>
                <Text style={styles.textBig}>5
                  <Ionicons
                    name={'md-star'}
                    style={styles.starIcon} /></Text>
                <Text style={styles.textSmall}>Rating</Text>
              </View>

              <View style={styles.userInfoBarItem}>
                <Text style={styles.textBig}>28</Text>
                <Text style={styles.textSmall}>Trips</Text>
              </View>
            </View>
          </View>


        </View>

      </ScrollView>
    );
  }
}


const mapStateToProps = (state) => {
  const userData = state.user.data;
  return {
    firstName: userData.firstName,
    avatarUrl: userData.avatarUrl,
  };
};

export default connect(mapStateToProps)(ProfileContainer);
