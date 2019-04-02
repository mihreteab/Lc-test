import styled, { css } from 'styled-components';

const ToggleButton = styled.button.attrs({
  className: 'col-md-6 col-sm-12 col-xs-12',
})`
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
