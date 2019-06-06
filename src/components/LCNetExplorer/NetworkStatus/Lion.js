import React from 'react'
import background from '../../../../assets/media/images/lion.png'
import { CustomizedH4, CustomizedH5 } from './SimpleComponents';

export default function Lion() {
    return (
        <div style={{height:'167px',background: "#fff",padding: '30px 60px', display:'flex', borderTop:'2px solid #F0F5F9'}}>
            <div style = {{heigt:'100px', width:'93px', backgroundImage : `url(${background})`, backgroundRepeat:'no-repeat'}}>
            </div>
            <div style={{paddingLeft:'105px'}}>
                <CustomizedH4>500B LIN</CustomizedH4>
                <CustomizedH5>500,000,000,000 Lions</CustomizedH5>
            </div>
        </div>
    )
}
