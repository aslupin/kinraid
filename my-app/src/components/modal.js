import React, {PropTypes} from 'react'
import {ModalContainer, ModalDialog} from 'react-modal-dialog'
class ModalDetail extends React.Component {
    static propTypes = {
      onClose: PropTypes.func,
    }
    render() {
      return <ModalContainer onClose={this.props.onClose}>
        <ModalDialog onClose={this.props.onClose} width={295} className="example-dialog" dismissOnBackgroundClick={true}>
          <h5>{this.props.get_food[1] === '' ? 'กดสุ่มก่อนจ้าา ':'รายละเอียด'}</h5>
          {this.props.get_food[0] === 'กดสุ่มเลยจ้า' ? '': this.props.get_food[0]}<br />
          {this.props.get_food[1] === '' ? '': this.props.get_food[1]}<br />
          {this.props.get_food[2] === '' ? '': this.props.get_food[2]}<br />
          {this.props.get_food[3] === '' ? '': this.props.get_food[3]}<br />
          
        </ModalDialog>
      </ModalContainer>;
    }
  }
export default ModalDetail  