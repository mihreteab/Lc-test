import React, { Component } from 'react'

import { TitleContainer, BlueTitle } from './SimpleComponents'
import Lion from './Lion';

export default class LionsInSerculation extends Component {
    render() {
        return (
            <div>
                <TitleContainer>
                    <BlueTitle> LIONS IN SERCULATION</BlueTitle>
                </TitleContainer>
                <Lion />
            </div>
        )
    }
}
