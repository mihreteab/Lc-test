import styled, { css } from 'styled-components';

const ResourceTabs = styled.div`
  cursor: pointer;
  display: inline-block;
  color: rgb(82, 97, 107);
  border: 1px solid transparent;
  background-color: #f0f5f9;
  font-size: 14px;
  margin-left: 5%;
  padding-bottom: 8px;
  padding-top: 8px;
  padding-left: 15px;

  ${props =>
    props.active &&
    css`
      color: #fff;
      background: #0884f8;
    `};
`;

export default ResourceTabs;
