import React, { Component } from 'react';
import logo from '../logo.svg';
import Result from '../components/result_random'
import Detail from '../components/detail'
import Dailog from '../components/dailog_detail'
import Banner from '../dist/img/banner.png'
const kinraidHead = {
  fontSize: '20px'
}
const btnRandom = {
  fontSize: '45px'
}
const stybanner = {
  width: '80%',
  maxWidth: '450px'
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu: [
        'ข้าวผัดหมู',
        'ข้าวผัดกุ้ง',
        'ข้าวผัดไก่',
        'ข้าวไข่เจียว',
        'ข้าวหมูทอดกระเทียมพริกไทย',
        'กะเพราหมูกรอบ',
        'ข้าวกะเพราปลาหมึก',
        'ผัดผักราดข้าว',
        'ข้าวกะเพราไข่เยี่ยวม้า',
        'ข้าวผัดคะน้าปลาเค็ม',
        'ข้าวผัดคะน้าหมูกรอบ',
        'ข้าวผัดคะน้าน้ำมันหอย',
        'ถั่วฝักยาวผัดพริกแกงราดข้าว',
        'ผัดพริกสดราดข้าว',
        'ข้าวกะเพราะหมูกรอบ',
        'ข้าวผัดผักกาดขาวใส่กุ้ง',
        'ข้าวกะเพราะหมูสับไข่ดาว',
        'ข้าวราดผัดฉ่าหมู ไก่',
        'ข้าวไข่เจียวกุ้งสับ',
        'ข้าวไข่เจียวหมูสับ',
        'ข้าวไก่ทอดกระเทียมพริกไทย',
        'ข้าวกะเพาะปลาผัดแห้ง',
        'ข้าวปลาหมึกทอดกระเทียมพริกไทย',
        'ข้าวกุ้งทอดกระเทียมพริกไทย',
        'ข้าวหมูทอดกระเทียมพริกไทย',
        'ข้าวหมูทอดกระเทียม',
        'ข้าวผัดไก่',
        'ข้าวผัดกุ้ง',
        'ข้าวผัดหมู',
        'ข้าวผัดกะเพราเนื้อ',
        'ข้าวผัดกะเพราหมู',
        'ข้าวผัดกะเพราปลาหมึก',
        'ข้าวผัดปลากระป๋อง',
        'ข้าวยำปลากระป๋อง',
        'ข้าวผัดกุนเชียง',
        'ข้าวไข่ผัดแหนม',
        'ข้าวผัดแหนม',
        'ผัดเขียวแห้งไก่ราดข้าว',
        'ข้าวหมกไก่',
        'ข้าวขาหมู',
        'ข้าวหมูแดง',
        'ข้าวมันไก่ทอด',
        'ข้าวมันไก่ต้ม',
        'ข้าวไข่ดาวทรงเครื่อง',
        'ข้าวผัดแกงเขียวหวาน',
        'ข้าวคลุกกะปิ',
        'ข้าวราดผงกะหรี่',
        'ข้าวผัดพริกหยวก',
        'ข้าวหน้าเป็ด',
        'ข้าวผัดปลาเค็ม',
        'ข้าวผัดกะเพราปลาหมึก',
        'ข้าวยำไก่แซ่บ'
      ],
      get_food: 'กดสุ่มเลยจ้า',
      active: false
    }
  }
  
  toggleClass(){
    const currentState = this.state.active
    this.setState({
      active: !currentState
    })
  }

  
  randomFood = () => {  
    var index_random = Math.floor((Math.random() * this.state.menu.length) + 1) - 1
    this.setState({
      get_food: this.state.menu[index_random]
    })
  }
  render() {
    return (
      <div className="App-randfood">
        <br />
        <img src={Banner} style={stybanner} className="animated swing" />
        <br /><br />
        <Result className={this.state.active? 'animated swing': null} get_food = {this.state.get_food} />
        <br />
        <Detail get_food = {this.state.get_food} />
        <br />
        <button type="button" className="btn btn-outline-info btn-lg" onClick = {this.randomFood}>สุ่มมมมม</button>
        
        
      </div>
    );
  }
}

export default App;
