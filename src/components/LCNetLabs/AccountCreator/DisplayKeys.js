import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Table = styled.div`
  margin-top: 1em;
  margin-bottom: 0.5em;
  display: table;
  width: 100%;
  table-layout: fixed;
  border: 1px solid #bdbfc0;
  border-radius: 3px;
`;
const Row = styled.div`
  display: table-row;
`;
const Label = styled.div`
  width: 25%;
  padding: 0.75em 1em;
  border-bottom: 1px solid #bdbfc0;
  display: table-cell;
  font-size: 16px;
  font-weight: 700;
`;
const Content = styled.div`
  width: 75%;
  display: table-cell;
  padding: 0.75em 1em;
  font-size: 16px;
  border-bottom: 1px solid #bdbfc0;
  word-break: break-all;
`;

const DisplayKeys = ({ keys }) => {
  return (
    <Table>
      <Row>
        <Label>Public Key</Label>
        <Content>{keys.publicKey}</Content>
      </Row>
      <Row>
        <Label>Secret Key</Label>
        <Content>{keys.secret}</Content>
      </Row>
    </Table>
  );
};
i;

DisplayKeys.propTypes = {
  keys: PropTypes.object.isRequired,
};

export default DisplayKeys;
