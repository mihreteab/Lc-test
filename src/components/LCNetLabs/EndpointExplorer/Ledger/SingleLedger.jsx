import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withHOCLogic } from '../withHOCLogic';
import { STATUS } from 'constants/index';
import Form, { InputField, Info, SubmitButton } from '../Form';

const endpointName = 'singleLedger';

const SingleLedger = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <InputField title="Ledger Sequence" id="sequence" type="text" required />
    <Info method="get" useField="sequence">
      {value =>
        `${process.env.REACT_APP_API_URL}/labs/ledgers/${
          value === '' ? '{sequence}' : value
        }`
      }
    </Info>
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);
SingleLedger.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/* istanbul ignore next */
function mapStateToProps({ endpointExplorer }) {
  return { endpointExplorer };
}
export default connect(mapStateToProps)(
  withHOCLogic(SingleLedger, endpointName),
);
