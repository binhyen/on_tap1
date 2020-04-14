import './App.css';
import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 8,
      isReset:false
    }
  }
  
  setActiveColor(color) {
    console.log(color);
    this.setState({
      color: color
    });  
  }

  setFontSize(fontSize) {
    this.setState({
      fontSize:fontSize
    });
  }

  setStyleDefaut = () => {
    // if(this.s)
    this.setState({
      color: 'red',
      fontSize: 8
    });
  }

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker 
            color={this.state.color}
            setActiveColor={(color) => this.setActiveColor(color)}
          ></ColorPicker>
          <SizeSetting 
            fontSize={this.state.fontSize} 
            setFontSize={(fontSize) => this.setFontSize(fontSize)}
            setStyleDefaut={() => this.setStyleDefaut()}
            ></SizeSetting>
          <Result 
            color={this.state.color} 
            fontSize={this.state.fontSize} 
          ></Result>
        </div>
      </div>
    );
  }
}

export default App;
