import React, { Component } from 'react';
import backgroundImg from '../../../../assets/media/images/LedgerIcon.png';


class Ledger extends Component {
  constructor(props){
    super(props);
  }

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
            <div>
              Ledger
              <br/>
              <div style={{color:'#0084F8'}}>
              {this.props.id}
              </div>
              
            </div>
          </div>
        </div>
        <div>
          <div style={{paddingTop:'10px', fontWeight:'400', color:'#777777'}}>
              <div style={{display:'flex',lineHeight:'18 px',fontSize:'13px', padding:'5px'}}>
                  <div style={{width:'108px'}}>Hash</div>
                  <div style={{color:'#0084f8', width:'615px'}}> { this.props.hash } </div>
              </div>
              <div style={{display:'flex',lineHeight:'18 px',fontSize:'13px', padding:'5px'}}>
                  <div style={{width:'108px'}}>Trasnsaction</div>
                  <div>1</div>
              </div>
              <div style={{display:'flex',lineHeight:'18 px',fontSize:'13px', padding:'5px'}}>
                  <div style={{width:'108px'}}>Time Stamp</div>
                  <div>
                    { this.props.timeStamp }
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Ledger;
