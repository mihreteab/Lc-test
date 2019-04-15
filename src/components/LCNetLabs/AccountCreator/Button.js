import styled, { css } from 'styled-components';

const Button = styled.button`
  background: #0084f8;
  border-radius: 4px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  ${props =>
    props.testNetwork &&
    css`
      background: #c9d6df;
      margin-top: 15px;
      width: 250px;
    `}
`;

export default Button;
