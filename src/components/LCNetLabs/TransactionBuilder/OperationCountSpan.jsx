import styled from 'styled-components';
import { utils } from 'styled-minimal';

const { responsive } = utils;

const OperationCountSpan = styled.div`
  border: 2px solid #c9d6df;
  border-radius: 4px;
  min-width: 80px;
  display: flex;
  justify-content: center;
  align-content: center;

  ${responsive({
    lg: 'font-size: 50px',
    md: 'font-size: 50px',
    sm: 'font-size: 40px !important;',
  })};
`;

export default OperationCountSpan;
