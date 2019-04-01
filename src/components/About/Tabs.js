import styled, { css } from 'styled-components';

const Tabs = styled.div`
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  text-align: center;
  color: #fff;
  border: 1px solid transparent;
  background-color: #0084f8;
  margin-bottom: 0px !important;
  font-size: 14px;
  margin-left: 5%;
  padding-bottom: 15px;
  padding-top: 15px;

  ${props =>
    props.isSelect &&
    css`
      border-bottom: 3px solid #00d67c;
    `};
`;

export default Tabs;
