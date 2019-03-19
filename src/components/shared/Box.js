import styled, { css } from 'styled-components';

const Box = styled.div.attrs({
  className: 'container',
})`
  margin-left: 15px;
  padding: 20px;
  border: 1px solid #c9d6df;
  box-sizing: border-box;
  border-radius: 4px;
  min-width: 100vh;

  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `};
`;

export default Box;
