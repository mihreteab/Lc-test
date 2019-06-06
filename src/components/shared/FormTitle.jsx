import styled, { css } from 'styled-components';

const FormTitle = styled.h2`
  font-size: 14px !important;
  font-weight: bold;
  line-height: 24px;
  color: #001b36;

  ${props =>
    props.paddingLeft &&
    css`
      padding-left: 10%;
    `}
`;

export default FormTitle;
