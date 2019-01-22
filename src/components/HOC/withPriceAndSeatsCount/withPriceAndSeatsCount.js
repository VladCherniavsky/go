import React from 'react';
import {View} from 'react-native';
import InputWithLabel from '../../InputWithLabel';
import styles from '../../MainTripCriteriaForm/styles';

const withPriceAndSeatsCount = (WrappedComponent) => {
  return class WithPriceAndSeatsCount extends React.Component {
    onTextChange = (field) => {
      return (text) => {
        this.props.onChangeText({
          [field]: text
        });
      };
    };
    render() {
      return (
        <View style={{alignItems: 'center'}}>
          <WrappedComponent {...this.props}/>

          <InputWithLabel
            label={'Price'}
            placeholder={'Price'}
            onPress={() => (null)}
            style={styles.element}
            labelStyle={styles.label}
            value={this.props.price}
            touchableStyle={styles.touchableStyle}
            shoudRenderInput={true}
            keyboardType={'numeric'}
            onChangeText={this.onTextChange('price')}
            textStyle={styles.textInputStyle}/>

          <InputWithLabel
            label={'Seats Count'}
            placeholder={'Seats Count'}
            onPress={() => (null)}
            style={styles.element}
            labelStyle={styles.label}
            value={this.props.seatsCount}
            touchableStyle={styles.touchableStyle}
            shoudRenderInput={true}
            keyboardType={'numeric'}
            onChangeText={this.onTextChange('seatsCount')}
            textStyle={styles.textInputStyle}/>
        </View>
      );
    }
  };
};

export default withPriceAndSeatsCount;
