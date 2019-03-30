import styled, { css } from 'styled-components';

const CenterDiv = styled.div.attrs({
  className: 'd-flex justify-content-center align-items-center',
})`
  ${props =>
    props.marginRight &&
    css`
      margin-right: 2.2%;
    `}

  ${props =>
    props.minHeight &&
    css`
      min-height: 110px;
    `}
`;

export default CenterDiv;
