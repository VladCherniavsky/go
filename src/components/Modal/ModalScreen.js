import React, {Component} from 'react';
import {Modal} from 'react-native';
import StatusBarEmptyView from '../StatusBarStubEmptyView';

export default class ModalScreen extends Component {
  state = {
    isOpen: false
  };

  open = () => {
    this.setState({
      isOpen: true
    });
  };

  close = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <Modal
        visible={this.state.isOpen}
        onRequestClose={this.close}
        animationType="slide">
        <StatusBarEmptyView />
        {this.props.renderHeader && this.props.renderHeader()}
        {this.props.renderContent && this.props.renderContent()}
      </Modal>
    );
  }
}
