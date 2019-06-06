import React, { Component } from 'react'

import { TitleContainer, BlueTitle } from './SimpleComponents'
import Lion from './Lion';

export default class TotalLions extends Component {
    render() {
        return (
            <div>
                <TitleContainer>
                    <BlueTitle>TOTAL LIONS</BlueTitle>
                </TitleContainer>
                <Lion />
            </div>
        )
    }
}
