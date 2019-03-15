import React, { PureComponent } from 'react';

import Wrapper from '../../shared/Wrapper';
import Title from '../../shared/Title';
import InputContainer from '../../shared/InputContainer';
import Box from '../../shared/Box';
import InputContainerLarge from '../../shared/InputContainerLarge';

export default class Assets extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Title>
          SELECT A ENDPOINT
          <InputContainer />
        </Title>
        <Title>ALL ASSETS</Title>
        <Box>
          <div className="d-flex">
            <div className="mr-5">
              <h2 className="m-3 font-weight-bold">ACCOUNT ID</h2>
              <span
                style={{
                  marginLeft: '30px',
                }}
              >
                (Optional)
              </span>
            </div>
            <InputContainerLarge value="" />
          </div>

          <div className="d-flex mt-5">
            <div className="mr-5">
              <h2 className="m-3 font-weight-bold">ASSET ISSUER</h2>
              <span
                style={{
                  marginLeft: '30px',
                }}
              >
                (Optional)
              </span>
            </div>
            <InputContainerLarge value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG" />
          </div>

          <div className="d-flex mt-5">
            <div className="mr-5">
              <h2 className="m-3 font-weight-bold">CURSOR</h2>
              <span
                style={{
                  marginLeft: '30px',
                }}
              >
                (Optional)
              </span>
            </div>
            <InputContainerLarge value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG" />
          </div>

          <div className="d-flex mt-5">
            <div className="mr-5">
              <h2 className="m-3 font-weight-bold">LIMIT</h2>
            </div>
            <InputContainerLarge value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG" />
          </div>

          <div className="d-flex mt-5">
            <div className="mr-5 d-flex">
              <h2 className="m-3 font-weight-bold">ORDER</h2>
              <div
                style={{
                  padding: '10px',
                }}
              >
                <span
                  style={{
                    border: '1px solid #c9d6df',
                    padding: '10px',
                    borderRadius: '4px',
                  }}
                >
                  asc
                </span>
                <span
                  style={{
                    border: '1px solid #c9d6df',
                    padding: '10px',
                    borderRadius: '4px',
                  }}
                >
                  desc
                </span>
              </div>
            </div>
          </div>
          <p className="m-2 mt-5">Server-Sent Events (streaming) mode</p>
          <p className="m-2 mt-5">https://horizon-testnet.stellar.org/assets</p>
        </Box>
      </Wrapper>
    );
  }
}
