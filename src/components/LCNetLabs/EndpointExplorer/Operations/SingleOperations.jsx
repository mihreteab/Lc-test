import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withHOCLogic } from '../withHOCLogic';
import Form, { InputField, Info, SubmitButton } from '../Form';

const endpointName = 'singleOperation';

const SingleOperation = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <InputField title="Operation ID" id="operationId" type="text" required />
    <Info method="get" useField="operationId">
      {value =>
        `${process.env.REACT_APP_API_URL}/labs/operations/${
          value === '' ? '{operationId}' : value
        }`
      }
    </Info>
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);
SingleOperation.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/* istanbul ignore next */
function mapStateToProps({ endpointExplorer }) {
  return { endpointExplorer };
}
export default connect(mapStateToProps)(
  withHOCLogic(SingleOperation, endpointName),
);
