// @format
import styled, { css } from 'styled-components';

const Banner = styled.div`
  font-size: 18px;
  margin-top: 1em;
  display: block;
  padding: 0.5em 1em;
  margin-bottom: 1em;
  border-radius: 3px;
  overflow-wrap: break-word;
  border: 1px solid #383;
  background: #d6e7d6;
  ${props => {
    if (props.loading) {
      return css`
        border: 1px solid #69f;
        background: #e8f0ff;
      `;
    }
    if (props.error) {
      return css`
        border: 1px solid #d12;
        background: #f8cfd3;
      `;
    }
    return css`
      border: 1px solid #383;
      background: #d6e7d6;
    `;
  }}
`;

export default Banner;
