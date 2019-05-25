import React, { Component } from 'react';

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'TEST',
    };
    this.setLive = this.setLive.bind(this);
    this.setTest = this.setTest.bind(this);
  }
  setLive() {
    this.setState({ active: 'LIVE' });
  }
  setTest() {
    this.setState({ active: 'TEST' });
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          width: '224px',
          height: '40px',
          border: '2px solid #FFFFFF',
          borderRadius: '3px',
          boxSizing: 'border-box',
        }}
      >
        <button
          style={
            this.state.active == 'TEST'
              ? {
                  color: '#000',
                  background: '#fff',
                  width: '112px',
                  height: '38px',
                  fontSize: '12px !important',
                  padding: '10px',
                  fontWeight: 'bolder',
                }
              : {
                  color: '#fff',
                  width: '112px',
                  height: '38px',
                  fontSize: '12px !important',
                  padding: '10px',
                  fontWeight: 'bolder',
                }
          }
          onClick={this.setTest}
        >
          TEST
        </button>
        <button
          style={
            this.state.active == 'LIVE'
              ? {
                  color: '#000',
                  background: '#fff',
                  width: '112px',
                  height: '38px',
                  fontSize: '12px !important',
                  padding: '10px',
                  fontWeight: 'bolder',
                }
              : {
                  color: '#fff',
                  width: '112px',
                  height: '38px',
                  fontSize: '12px !important',
                  padding: '10px',
                  fontWeight: 'bolder',
                }
          }
          onClick={this.setLive}
        >
          LIVE
        </button>
      </div>
    );
  }
}
export default ToggleButton;
