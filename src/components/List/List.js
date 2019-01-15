import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const renderItems = (data) => {
  return data.map((item) => {
    return <ListItem
      key={item.description}
      item={item}/>;
  });
};

const ListItem = ({item}) => {
  return (
    <View>
      <Text>{item.description}</Text>
    </View>
  );
};

const List = ({data}) => {
  return (
    <View style={styles.list}>
      {renderItems(data)}
    </View>
  );
};

export default List;
