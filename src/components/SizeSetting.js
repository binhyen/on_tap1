import React, { Component } from 'react';
import Reset from './Reset';

class SizeSetting extends Component {
   

    increaFonSize(){
        let fontSize = this.props.fontSize+2;
        if(fontSize >= 32) fontSize = 32;
        this.setState({
            fontSize: fontSize
        });
        this.props.setFontSize(fontSize);
    }

    decreaFonSize(){
        let fontSize = this.props.fontSize-2;
        if(fontSize <= 8) fontSize = 8;
        this.setState({
            fontSize: fontSize
        });
        this.props.setFontSize(fontSize);
    }
    
    // setStyleDefaut = (isReset) => {
    //     this.props.setStyleDefaut(isReset);
    // }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">Size : {this.props.fontSize}px</h3>
              </div>
              <div className="panel-body">
                <button onClick={() => this.decreaFonSize()} type="button" className="btn btn-success">Giảm</button>&nbsp;
                <button onClick={() => this.increaFonSize()} type="button" className="btn btn-success">Tăng</button>
              </div>
              <Reset
                setStyleDefaut={() => this.props.setStyleDefaut()}
              ></Reset>
            </div>
          </div>
        );
    }
}

export default SizeSetting;