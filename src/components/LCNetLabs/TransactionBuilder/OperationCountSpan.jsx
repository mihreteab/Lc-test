import styled from 'styled-components';
import { utils } from 'styled-minimal';

const { responsive } = utils;

const OperationCountSpan = styled.div`
  border: 2px solid #c9d6df;
  border-radius: 4px;
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-left: 15px;
  padding-right: 15px;

  ${responsive({
    lg: 'font-size: 87px',
    md: 'font-size: 87px',
    sm: 'font-size: 40px !important;',
  })};
`;

export default OperationCountSpan;
