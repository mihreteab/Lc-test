import React, { Component } from 'react'

import backgroundImg from '../../../../assets/media/images/rectangleSucess.png';

class Transaction extends Component {
    render() {
        return (
            <div style={{ borderBottom: '1px solid #aaaaaa', height: '114px', display:'flex'}}>
            <div
              style={{
                height: '114px',
                width: '147.25px',
                display: 'flex',
                justifyContent: 'center',
                alignItems :'center'
              }}
            >
              <div style = {{
                display:'flex', 
                justifyContent:'center', 
                alignItems:'center',
                fontWeight:'600',
                fontSize:'13px',
                height:"64px", 
                width:'90px', 
                backgroundRepeat : 'no-repeat', 
                backgroundImage:`url(${backgroundImg})`}}>
                <div style={{padding:'0 10px 10px 0', color:'#00d67c'}}>
                  Sucess
                </div>
              </div>
            </div>
            <div>
              <div style={{paddingTop:'10px', fontWeight:'400', color:'#777777'}}>
                  <div style={{display:'flex',lineHeight:'18 px',fontSize:'13px', padding:'5px'}}>
                      <div style={{width:'108px', color:'#00d67c'}}> TxHash</div>
                      <div style={{color:'#0084f8'}}> { this.props.hash } </div>
                  </div>
                  <div style={{display:'flex',lineHeight:'18 px',fontSize:'13px', padding:'5px'}}>
                      <div style={{width:'108px'}}>Amount</div>
                      <div>{ this.props.amount }</div>
                  </div>
                  <div style={{display:'flex',lineHeight:'18 px',fontSize:'13px', padding:'5px'}}>
                      <div style={{width:'108px'}}>Fee</div>
                      <div>
                        { this.props.timeStamp }
                      </div>
                  </div>
              </div>
            </div>
          </div>
        )
    }
}
export default Transaction;