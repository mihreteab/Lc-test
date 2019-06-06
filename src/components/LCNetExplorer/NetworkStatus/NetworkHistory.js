import React, { Component } from 'react'
import { NetworkStatusWrapper, BlackTitle } from './SimpleComponents';

export default class NetworkHistory extends Component {
    render() {
        return (
            <div>
                <NetworkStatusWrapper>
                    <BlackTitle>Live Network History</BlackTitle>
                </NetworkStatusWrapper>
                
            </div>
        )
    }
}
