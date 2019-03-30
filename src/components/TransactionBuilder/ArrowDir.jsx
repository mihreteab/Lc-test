import styled, { css } from 'styled-components';

const ArrowDir = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 16px solid #c4c4c4;
  border-radius: 2px;

  ${props =>
    props.up &&
    css`
      transform: rotate(180deg);
      top: 22px;
      left: 16px;
    `};

  ${props =>
    props.down &&
    css`
      top: 24px;
      left: 16px;
    `};
`;

export default ArrowDir;
