import styled, { css } from 'styled-components';

const Span = styled.span`
  border: 1px solid #c9d6df;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;

  ${props =>
    props.select &&
    css`
      color: #fff;
      background: #0884f8;
    `};
`;

export default Span;
