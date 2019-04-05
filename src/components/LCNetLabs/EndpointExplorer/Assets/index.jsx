import React, { PureComponent } from 'react';

import Wrapper from '../../../shared/Wrapper';
import Title from '../../../shared/Title';
import InputContainer from '../../../shared/InputContainer';
import Box from '../../../shared/Box';
import InputContainerLarge from '../../../shared/InputContainerLarge';
import Span from '../../../shared/Span';
import FormTitle from '../../../shared/FormTitle';
import FormSubTitle from '../../../shared/FormSubTitle';
import Info from '../../../shared/Info';

export default class Assets extends PureComponent {
  render() {
    return (
      <Wrapper className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
        <Title>
          SELECT A ENDPOINT
          <InputContainer value="Single Account" />
        </Title>
        <Title>ALL ASSETS</Title>
        <Box padding="40px">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 px-0">
              <FormTitle>ACCOUNT ID</FormTitle>
              <FormSubTitle>(Optional)</FormSubTitle>
            </div>
            <InputContainerLarge
              className="col-lg-9 col-md-8 col-sm-12"
              value=""
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 col-md-4 col-sm-12 px-0">
              <FormTitle>ASSET ISSUER</FormTitle>
              <FormSubTitle>(Optional)</FormSubTitle>
            </div>
            <InputContainerLarge
              className="col-lg-9 col-md-8 col-sm-12"
              value="
            Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 col-md-4 col-sm-12 px-0">
              <FormTitle>CURSOR</FormTitle>
              <FormSubTitle>(Optional)</FormSubTitle>
            </div>
            <InputContainerLarge
              className="col-lg-9 col-md-8 col-sm-12"
              value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 col-md-4 col-sm-12 px-0">
              <FormTitle>LIMIT</FormTitle>
            </div>
            <InputContainerLarge
              className="col-lg-9 col-md-8 col-sm-12"
              value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 col-md-4 col-sm-12 px-0">
              <FormTitle>ORDER</FormTitle>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12 mt-2 px-0">
              <Span>asc</Span>
              <Span>desc</Span>
            </div>
          </div>

          <div className="row mt-5">
            <Info>Server-Sent Events (streaming) mode</Info>
            <Info>https://horizon-testnet.stellar.org/assets</Info>
          </div>
        </Box>
      </Wrapper>
    );
  }
}
