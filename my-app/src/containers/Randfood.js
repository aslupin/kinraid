import React, { Component } from 'react';
import logo from '../logo.svg';
import Result from '../components/result_random'
import Detail from '../components/detail'
import Btnrandom from '../components/btnrandom'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // getFood: ['กุ้ง','ไก่']
      menu: ['ข้าวไก่ทอดกระเทียม',
      'ข้าวมันไก่',
      'ข้าวพริกแกงหมูกรอบ',
      'มาม่าผัดต้มยำ',
      'ข้าวหมูทอดกระเทียม',
      'ข้าวกะเพราหมูสับ',
      'ข้าวกะเพราไก่',
      'ข้าวผัดหมู',
      'ข้าวคะน้าหมูกรอบ',
      'ข้าวผัดปลาเค็ม',
      'ข้าวไข่เจียว',
      'ข้าวผัดกุ้ง',
      'ข้าวผัดทะเล'],
      get_food: 'กดสุ่มเลยจ้า'
    }
  }
  RandomFood = () => {
    
    var index_random = Math.floor((Math.random() * this.state.menu.length) + 1) - 1
    this.setState({
      get_food: this.state.menu[index_random]
    })
  }
  render() {
    return (
      <div className="App-randfood">
        <p>Kin Rai D @KU</p>
        {this.state.get_food}
        <p></p>
        <button onClick={this.RandomFood}>สุ่มค้าบ</button>
        <Result />
        <Detail />
        <Btnrandom />
        
      </div>
    );
  }
}

export default App;
