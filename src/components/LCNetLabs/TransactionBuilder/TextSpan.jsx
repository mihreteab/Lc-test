import styled, { css } from 'styled-components';

const TextSpan = styled.div`
  color: #52616b;
  font-size: 15px;
  width: 690px;

  ${props =>
    props.top &&
    css`
      top: props.top;
    `}
`;

export default TextSpan;
