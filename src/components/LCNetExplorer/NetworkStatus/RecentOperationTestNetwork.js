import React, { Component } from 'react'
import axios from 'axios'

import { TitleContainer, BlueTitle, ListContainer, FooterContainer, Modifiedbutton, SubHeaderContainer, SubTitle } from './SimpleComponents';
import Operation from './Operation';
import { IP_ADDRESS } from '../../utils/config'


export default class RecentOperationTestNetwork extends Component {

    state = {
        Operations:[]
    }

    componentWillMount() {
        axios.get(`${IP_ADDRESS}/v1/test/recentOperations`)
        .then(response => (this.setState({Operations : response.data.data.records})))
        .then(err => (console.log(err)))
    }

    render() {

        const {Operations} = this.state;

        return (
            <div>
                <TitleContainer>
                    <BlueTitle>RECENT OPERATIONS: TEST NETWORK</BlueTitle>
                </TitleContainer>
                <ListContainer>
                <SubHeaderContainer>
                            <SubTitle>Operations</SubTitle>
                            <SubTitle>Details</SubTitle>
                            <SubTitle>Date</SubTitle>
                </SubHeaderContainer>
                {
                        Operations.map((operation)=> <Operation id = {operation.id} date = {operation.created_at} />)
                }
                </ListContainer>
                <FooterContainer>
                    <Modifiedbutton>View All Validators</Modifiedbutton>
                </FooterContainer>
            </div>
        )
    }
}
