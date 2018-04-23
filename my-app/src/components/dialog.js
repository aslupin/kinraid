import React, {PropTypes} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import ReactSpinner from 'react-spinjs';
import BtnDetail from './detail'
import ModalDetail from './modal'
export default class DialogDetail extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  }
  state = {
    showModal: false,
  }
  openModal = () => {
    this.setState({showModal: true});
  }
  closeModal = () => {
    this.setState({showModal: false});
  }
  render() {
    return(
        <div className={this.props.className} onClick={this.openModal}>
            <BtnDetail />
            {this.state.showModal ?
                <ModalDetail get_food={this.props.get_food} onClose={this.closeModal}/>
            : null}
            </div>
    );
  }
}
