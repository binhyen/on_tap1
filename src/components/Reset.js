import React, { Component } from 'react';

class Reset extends Component {
    // setStyleDefaut = () => {
    //     this.props.setStyleDefaut();
    // }
    render() {
        return (
            <button onClick={() => this.props.setStyleDefaut()} type="button" className="btn btn-primary">Reset</button>
        );
    }
}

export default Reset;