import React, { Component } from 'react';
import logo from '../logo.svg';
import Result from '../components/result_random'
import Detail from '../components/detail'
import Dialog from '../components/dialog'
import Banner from '../dist/img/banner.png'
import Random from '../dist/img/random.png'
import Toggle from '../components/toggle'
import Footer from '../components/footer'
import '../dist/css/shake.css'

const styRandom = {
  width: '70%',  
  maxWidth: '350px',
  paddingTop: '30px'
  
  
}
const styBanner = {
  width: '80%',
  maxWidth: '550px'
}
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      menu: [
        ['ข้าวผัดคะน้าปลาเค็ม','ปริมาณแคลอรี่: 400 kcal','ความเผ็ด: น้อย','ราคา: 45-50 บาท'],
        ['ข้าวผัดคะน้าหมูกรอบ','ปริมาณแคลอรี่: 400 kcal','ความเผ็ด: น้อย','ราคา: 45-50 บาท'],
        ['ข้าวไข่เจียวกุ้งสับ','ปริมาณแคลอรี่: 400 kcal','ความเผ็ด: น้อย','ราคา: 45-50 บาท'],
        ['ข้าวผัดไก่','ปริมาณแคลอรี่: 400 kcal','ความเผ็ด: น้อย','ราคา: 45-50 บาท'],
        ['ข้าวผัดกะเพราปลาหมึก','ปริมาณแคลอรี่: 400 kcal','ความเผ็ด: น้อย','ราคา: 45-50 บาท'],
        ['ข้าวผัดปลากระป๋อง','ปริมาณแคลอรี่: 400 kcal','ความเผ็ด: น้อย','ราคา: 45-50 บาท']
      ],
      res: [
        ['บาร์ใหม่','ประเภทร้าน: บาร์/โรงอาหาร','ราคาประมาณ: 40-60 บาท','ตำแหน่ง: ม.เกษตร'],
        ['บาร์ใหม่กว่า','ประเภทร้าน: บาร์/โรงอาหาร','ราคาประมาณ: 40-60 บาท','ตำแหน่ง: ม.เกษตร'],
        ['บาร์วิศวะ (IUP)','ประเภทร้าน: บาร์/โรงอาหาร','ราคาประมาณ: 40-60 บาท','ตำแหน่ง: ม.เกษตร'],
        ['บาร์บริหาร (BUS)','ประเภทร้าน: บาร์/โรงอาหาร','ราคาประมาณ: 40-60 บาท','ตำแหน่ง: ม.เกษตร'],
        ['บาร์วิทย์','ประเภทร้าน: บาร์/โรงอาหาร','ราคาประมาณ: 40-60 บาท','ตำแหน่ง: ม.เกษตร'],
        ['ร้านชมจันทร์','ประเภทร้าน: ร้านอาหารตามสั่ง','ราคาประมาณ: 40-60 บาท','ตำแหน่ง: ตรงข้ามประตู 1 ม.เกษตร'],
        ['ร้านแซม','ประเภทร้าน: สเต็ก','ราคาประมาณ: 40-60 บาท','ตำแหน่ง: ฝั่งตรงข้าม ม.เกษตร ก่อนถึงตลาดอมรภัณฑ์'],
        ['ร้านกอลิล่า','ประเภทร้าน: สเต็ก','ราคาประมาณ: 40-60 บาท','ตำแหน่ง: ตลาดอมรภัณฑ์'],
        ['ร้านพี่กร ซอย54','ประเภทร้าน: ร้านอาหารตามสั่ง','ราคาประมาณ: 40-60 บาท','ตำแหน่ง: ตรงข้าม ม.เกษตร ซอย52'],
        ['ร้านสี่แยก ซอย52','ประเภทร้าน: ร้านอาหารตามสั่ง','ราคาประมาณ: 40-60 บาท','ตำแหน่ง: ตรงข้าม ม.เกษตร ซอย52'],
        ['ตลาดอมรภัณฑ์','ประเภทร้าน: ตลาด','ราคาประมาณ: 40-60 บาท','ตำแหน่ง: ตลาดอมรภัณฑ์'],
        ['ร้านข้าวมันไก่ ซอย52','ประเภทร้าน: ร้านข้าวมันไก่','ราคาประมาณ: 40-60 บาท','ตำแหน่ง: ตรงข้าม ม.เกษตร ซอย52']

      ],
      get_food: ['กดสุ่มเลยจ้า','','',''],
      show: false,
      showShake: false,
      showClass: undefined,
      showShakeClass: undefined,
      toggleActive: false
    }
  }

  showFlipResult = (event) => {
    this._showFlipResult(event)
  }

  _showFlipResult(event) {
    this.setState({
      show: !this.state.show,
      showClass: (!this.state.show ? "animated flipInY": "animated flipInX")
    })
  }
  showShakeRandom = (event) => {
    this._showShakeRandom(event)
  }

  _showShakeRandom(event) {
    this.setState({
      showShake: !this.state.showShake,
      showShakeClass: (!this.state.showShake ? "btnShake": "btnShakeII")
    })
  }
  
  toggleActived = () => {
    this.setState({
      toggleActive: !this.state.toggleActive
    })
  }

  btnRandoming = () => {
    if(this.state.toggleActive){
      this.randomFood()
    }
    else{
      this.randomRes()
    }
    
    this.showShakeRandom()
    this.showFlipResult()
    
    
  }
  randomRes = () => {
    var index_random = Math.floor((Math.random() * this.state.res.length) + 1) - 1
    this.setState({
      get_food: this.state.res[index_random]
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
        <img src={Banner} style={styBanner} className="animated swing" />
        <br /><br />

        <Result get_food={this.state.get_food} flipResult={this.state.showClass} />
      <br />

      <div className="container" >
      <div className="row">
      <div className="col-lg-2"></div>
      <div className="col-sm-1 col-md-3 col-lg-2"></div>
      <div className="col-xs-6 col-sm-5 col-md-3 col-lg-2"><Dialog get_food={this.state.get_food}/></div>
      <div className="col-xs-6 col-sm-5 col-md-3 col-lg-2"><div  onClick={this.toggleActived}><Toggle /></div></div>
      <div className="col-sm-1 col-md-3 col-lg-2" ></div>
      <div className="col-lg-2"></div>
      </div></div>
      
      <img src={Random} onClick = {this.btnRandoming} style={styRandom} className={this.state.showShakeClass} />
      <Footer />
        

       

        
      </div>
    );
  }
}

export default App;
