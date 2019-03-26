import styled, { css } from 'styled-components';

const TextContainer = styled.p`
  background: #52616b;
  color: #f0f5f9;
  padding: 5px 20px;
  margin-top: 20px;

  ${props =>
    props.height &&
    css`
      line-height: 40px;
    `};
`;

export default TextContainer;
