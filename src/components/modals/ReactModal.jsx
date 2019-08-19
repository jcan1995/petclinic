import React, { Component } from 'react';
import styled from 'styled-components';
import getModalByType from './ModalController';

import Modal from 'react-modal';

const customStyles = {
  content : {
    backgroundColor: "rgb(70, 160, 236)",
    margin: "15% auto",
    padding: "20px",
    border: "1px solid #888",
    width: "80%",
  },
  overlay: {
    top                   : '0',
    left                  : '0',
    position: 'fixed',
    zIndex: "4",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgb(0,0,0)",
    backgroundColor: "rgba(0,0,0,0.4)"
  }
};

const Icon = styled.a`
  cursor: pointer;
  color: #000;
  font-size: 24px;
`;


class ReactModal extends Component {

  onRequestClose = () => {
    const { setModal } = this.props;
    setModal({isOpen: false});
  }

  render() {
    const { modal: { isOpen } } = this.props;
    const modalType = getModalByType(this.props);

    return (
      <Modal
        isOpen={isOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Icon style={{color: '#fff'}} onClick={this.onRequestClose}>&times;</Icon>
        {modalType}
      </Modal>
    );
  }

}

export default ReactModal;
