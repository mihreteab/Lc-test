import styled, { css } from 'styled-components';

const Item = styled.div`
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 6px;
  padding-left: 10px;
  height: 58px;
  font-size: 24px;
  cursor: pointer;

  ${props =>
    props.selected &&
    css`
      background-size: 16px;
      background-repeat: no-repeat;
      background-position: 2px 8px;
    `};
`;

export default Item;
