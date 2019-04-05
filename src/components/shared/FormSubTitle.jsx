import styled, { css } from 'styled-components';

const FormSubTitle = styled.span`
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #636161;

  ${props => props.paddingLeft && css`
    padding-left: 10%
  ` }
`;

export default FormSubTitle;
