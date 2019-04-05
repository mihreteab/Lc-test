import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px;
`;

const SpanText = styled.span`
  color: rgb(0, 132, 248);
`;

export default class Laboratory extends PureComponent {
  state = {};

  render() {
    return (
      <Wrapper>
        <h3 className="font-weight-bold">LC NET LABORATORY</h3>
        <p
          style={{
            color: '#52616B',
            fontSize: '15px !important',
          }}
        >
          The Stellar Laboratory is a set of tools that enables people to try
          out and learn <br /> about the LC Net network. The laboratory can{' '}
          <SpanText>build transactions, sign them,</SpanText>
          <br /> and <SpanText>submit them to the network</SpanText>. It can
          also
          <SpanText>
            make requests to any of the <br /> Horizon endpoints
          </SpanText>
          . <br /> <br /> For Stellar docs, take a look at the
          <SpanText> LC Net developers</SpanText> site.
        </p>
      </Wrapper>
    );
  }
}
