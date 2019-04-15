import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withHOCLogic } from '../withHOCLogic';
import Form, { InputField, Info, SubmitButton } from '../Form';

const endpointName = 'singleAccount';

const SingleAccount = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <InputField title="Account ID" id="account_id" type="text" required />
    <Info method="get" useField="account_id">
      {value =>
        `${process.env.REACT_APP_API_URL}/labs/accounts/${
          value === '' ? '{account_id}' : value
        }`
      }
    </Info>
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);
SingleAccount.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/* istanbul ignore next */
function mapStateToProps({ endpointExplorer }) {
  return { endpointExplorer };
}
export default connect(mapStateToProps)(
  withHOCLogic(SingleAccount, endpointName),
);
