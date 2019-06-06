import React, { Component } from 'react'

import BackgroundImage from '../../../../assets/media/images/dheu.png'

class NetworkAsset extends Component {
    render() {
        return (
            <div style={{display:'flex', justifyContent:'space-between', padding:'20px 5px', borderBottom:'1px solid #BCC9D2', color:'#777777', fontSize:'12px'}}>
                <div style={{}}>HKDT [Cryptomover] GABSZV…H6IMRQ</div>
                <div>3.15 up arrow+2.08%+2.08%</div>
                <div style={{width:'120px', height: '20px', backgroundRepeat:'no-repeat', backgroundImage:`url(${BackgroundImage})`}}></div>
            </div>
        )
    }
}
export default NetworkAsset;