import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withHOCLogic } from '../withHOCLogic';
import Form, { InputField, Info, SubmitButton } from '../Form';

const endpointName = 'postTransaction';

const PostTransaction = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <InputField title="Transaction Envelope XDR" id="tx" type="text" required />
    <Info method="post" useField="tx">
      {() => `${process.env.REACT_APP_API_URL}/labs/transactions`}
    </Info>
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);
PostTransaction.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/* istanbul ignore next */
function mapStateToProps({ endpointExplorer }) {
  return { endpointExplorer };
}
export default connect(mapStateToProps)(
  withHOCLogic(PostTransaction, endpointName),
);
