import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Toggle from 'react-bootstrap-toggle';
import "../../node_modules/react-bootstrap-toggle/dist/bootstrap2-toggle.css"
class Form extends Component {
  constructor() {
    super();
    this.state = { toggleActive: false };
    this.onToggle = this.onToggle.bind(this);
  }
 
  onToggle() {
    this.setState({ toggleActive: !this.state.toggleActive });
  }
 
  render() {
    return (
      
        <Toggle
          className="btn btn-outline-warning btn-sm"
          onClick={this.onToggle}
          on="<< สุ่มร้านอาหาร "
          off="สุ่มอาหาร >>"
          size="xs"
          onstyle="default"
          offstyle="default"
          height="33px"
          active={this.state.toggleActive}
        />

        
      
    )
  }
 
}
export default Form
 