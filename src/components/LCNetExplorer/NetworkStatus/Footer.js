import React, { Component } from 'react'


import { FooterWrapper } from './SimpleComponents';
import background from '../../../../assets/media/images/w-logo.png'


export default class Footer extends Component {
    render() {
        return (
            <div>
                <FooterWrapper>
                    <div style={{ paddingTop: '20px'}}>
                        <div style = {{ backgroundImage : `url(${background})`, height: '28px', width: '200px', backgroundRepeat:'no-repeat'}}>
                        </div>
                    </div>
                </FooterWrapper>
            </div>
        )
    }
}
