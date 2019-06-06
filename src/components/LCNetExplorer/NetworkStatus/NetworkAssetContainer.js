import React, { Component } from 'react'

import { BlueTitle, ListContainer, TitleContainer, FooterContainer, Modifiedbutton, SubHeaderContainer, SubTitle} from './SimpleComponents'
import NetworkAsset from './NetworkAsset';

class NetworkAssetContainer extends Component {
    render() {
        return (
            <div>
                <TitleContainer>
                    <BlueTitle>LIVE NETWORK ASSETS</BlueTitle>
                </TitleContainer>
                <ListContainer>
                    <SubHeaderContainer>
                            <SubTitle>Asset</SubTitle>
                            <SubTitle>Price(24h)</SubTitle>
                            <SubTitle>Dynamic(7d)</SubTitle>
                    </SubHeaderContainer>
                    <NetworkAsset /> 
                    <NetworkAsset /> 
                    <NetworkAsset /> 
                    <NetworkAsset /> 
                    <NetworkAsset /> 
                    <NetworkAsset /> 
                    <NetworkAsset />
                    <NetworkAsset /> 
                    <NetworkAsset /> 
                    <NetworkAsset /> 
                    <NetworkAsset /> 
                    <NetworkAsset /> 
                    <NetworkAsset /> 
                    <NetworkAsset />
                </ListContainer>
                <FooterContainer>
                    <Modifiedbutton>View All Validators</Modifiedbutton>
                </FooterContainer>
                
            </div>
        )
    }
}
export default NetworkAssetContainer;