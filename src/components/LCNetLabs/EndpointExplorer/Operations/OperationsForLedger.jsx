import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withHOCLogic } from '../withHOCLogic';
import UrlMaker from '../UrlMaker';
import Form, { InputField, OptionSpan, Info, SubmitButton } from '../Form';

const endpointName = 'ledgerOperations';

const options = ['asc', 'desc'];
const include = ['true', 'false'];

const LedgerOperations = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <InputField
      title="Ledger Sequence"
      id="ledgerSequence"
      type="text"
      required
    />
    <InputField
      title="Cursor"
      subtitle="(optional)"
      id="cursor"
      type="text"
      required
    />
    <InputField title="Limit" id="limit" type="number" min="1" required />
    <OptionSpan title="Order" type="options" id="order" options={options} />
    <OptionSpan
      title="Include failed"
      type="options"
      id="includeFailed"
      options={include}
    />
    <Info method="get" useField="all">
      {value => UrlMaker(value, '/ledgers', 'ledgerSequence', '/operations')}
    </Info>
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);
LedgerOperations.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/* istanbul ignore next */
function mapStateToProps({ endpointExplorer }) {
  return { endpointExplorer };
}
export default connect(mapStateToProps)(
  withHOCLogic(LedgerOperations, endpointName),
);
