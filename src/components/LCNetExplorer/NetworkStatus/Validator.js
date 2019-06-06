import React, { Component } from 'react'
import styled from 'styled-components'

class Validator extends Component {
    render() {
        return (
            <div style={{borderBottom:'1px solid #bbbbbb', display:'flex',justifyContent:'space-between', fontSize:'14px', padding:'20px 10px', height:'69px'}}>
                <div>
                <img src = {require('../../../../assets/media/images/Polygon.png') } alt="polygon" style={{height:'18 px', paddingRight:'10px'}}/>    
                COINQVEST (Finland)
                </div>
                <div>
                <img src = {require('../../../../assets/media/images/rectangle.png') } alt="polygon" style={{height:'18 px', paddingRight:'10px'}}/>    
                finland.stellar.coinqvest.com:11625	
                </div>
                <div>
                <img src = {require('../../../../assets/media/images/clock.png') } alt="polygon" style={{height:'18 px', paddingRight:'10px'}}/>    
                24H 100% 30D 99.98%	
                </div>
                <div>
                <img src = {require('../../../../assets/media/images/progress.png') } alt="polygon" style={{height:'18 px'}}/>   
                </div>
            </div>
        )
    }
}
export default Validator;
