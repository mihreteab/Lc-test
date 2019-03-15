import styled, { css } from 'styled-components';

const ToggleButton = styled.button`
  font-size: 15px;
  padding: 15px;
  border-radius: 25px;
  font-weight: bolder;

  ${props =>
    props.active &&
    css`
      color: #fff;
      background: #00d67c;
    `};
`;

export default ToggleButton;
