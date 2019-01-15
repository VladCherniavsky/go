import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const ModalHeader = (props) => {
  const {
    headerContentStyle = {},
    rightPartStyle = {},
    leftPartStyle = {},
    renderLeftPart,
    renderRightPart,
    renderHeaderContent
  } = props;

  const leftBlockStyle = {
    ...styles.header__left_block,
    ...leftPartStyle
  };

  const rightBlockStyle = {
    ...styles.header__right_block,
    ...leftPartStyle
  };

  const contentBlockStyle = {
    ...styles.header__content,
    ...headerContentStyle
  };


  return (
    <View style={styles.header}>
      {
        renderLeftPart &&
        <View style={leftBlockStyle}>
          {renderLeftPart()}
        </View>
      }

      <View style={contentBlockStyle}>
        {renderHeaderContent && renderHeaderContent()}
      </View>
      <View style={rightBlockStyle}>
        {renderRightPart && renderRightPart()}
      </View>
    </View>
  );
};
export default ModalHeader;
