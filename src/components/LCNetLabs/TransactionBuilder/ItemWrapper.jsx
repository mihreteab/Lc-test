import styled, { css } from 'styled-components';

const ItemWrapper = styled.div`
  z-index: 100;
  background: #fff;
  position: relative;

  ${props =>
    props.show &&
    css`
      display: none;
    `}
`;

export default ItemWrapper;
