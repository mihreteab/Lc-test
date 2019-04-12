import React from 'react';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';
import styled from 'styled-components';
import Box from '../../shared/Box';
import 'react-json-pretty/themes/monikai.css';

const Pre = styled.pre`
  background: #f4f4f5;
  margin: 0;
  padding: 0.75em 1em;
`;
const Code = styled.code`
  max-height: inherit;
  height: 100%;
  padding: 0 1em;
  font-size: 16px;
  display: block;
  overflow: auto;
`;

export const JsonDisplay = ({ json }) => (
  <Box
    style={{
      backgroundColor: '#f4f4f5',
    }}
  >
    <Pre>
      <Code>
        <JSONPretty
          themeClassName="custom-json-pretty"
          theme={{
            main:
              'line-height:1.3;color:#5f6364;background:#f4f4f5;overflow:auto;',
            key: 'color:#c92c2c;',
            string: 'color:#2f9c0a;',
            value: 'color:#a6e22e;',
            boolean: 'color:#ac81fe;',
          }}
          id="json-pretty"
          data={json}
        />
      </Code>
    </Pre>
  </Box>
);

JsonDisplay.propTypes = {
  json: PropTypes.string.isRequired,
};
