import React, { Component } from 'react'

export default class Operation extends Component {

    constructor(props) {
        super (props);
    }

    render() {
        return (
            <div style={{display:'flex', justifyContent:'space-between', padding:'20px 5px', borderBottom:'1px solid #BCC9D2', color:'#777777', fontSize:'12px'}}>
                <div style={{}}>{this.props.id}</div>
                <div>14 Mar 2019 19:24:45 UTC</div>
                <div>{this.props.date}</div>
            </div>
        )
    }
}
