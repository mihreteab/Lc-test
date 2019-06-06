import React, { Component } from 'react'
import Validator from './Validator';
import { BlueTitle } from './SimpleComponents';

class ValidatorsNetworkNode extends Component {
    render() {
        return (
            <div style = {{paddingBottom:'24px'}}>
                <div
                    style={{
                        height: '84px',
                        background: '#ffffff',
                        padding: '15px 0 15px 22px',
                        borderBottom: '2px solid #F0F5F9 ',
                        display: 'flex',
                        justifyContent:'center'
                    }}
                    >
                        <BlueTitle>VALIDATORS LIVE NETWORK NODES</BlueTitle>
                </div>
                <div style={{padding:'16px 40px', background:'#FFFFFF', fontSize:'16px', color:'#52616b', fontWeight:'600'}}>
                    <div style={{display:'flex', justifyContent:'space-between', border:'1px solid #bbbbbb'}}>
                        <div style={{padding:'17px 14px'}}>Organization Name</div>
                        
                            <div style={{padding:'17px 14px 17px 14px'}}>Node Address</div>
                            <div style={{padding:'17px 140px 17px 50px'}}>Node Statics</div>
                        
                        <div style={{padding:'17px 140px 17px 14px'}}>Wallet Address</div>
                    </div>
                    <Validator />
                </div>
                <div
                    style={{
                        height: '84px',
                        background: '#ffffff',
                        padding: '22px',
                        borderTop: '2px solid #F0F5F9 ',
                        display: 'flex',
                        justifyContent:'center'
                    }}
                >
                    <button style={{
                        background:'#F0F5F9', 
                        width:'100%', 
                        fontWeight:'bold',
                        fontSize:'14px'}}
                    >View All Validators</button>
                </div>
            </div>
        )
    }
}
export default ValidatorsNetworkNode;