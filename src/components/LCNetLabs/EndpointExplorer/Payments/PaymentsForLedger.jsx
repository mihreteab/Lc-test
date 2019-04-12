import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withHOCLogic } from '../withHOCLogic';
import { STATUS } from 'constants/index';
import UrlMaker from '../UrlMaker';
import Form, { InputField, OptionSpan, Info, SubmitButton } from '../Form';

const endpointName = 'ledgerPayments';

const options = ['asc', 'desc'];
const include = ['true', 'false'];

const LedgerPayments = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <InputField title="Ledger Sequence" id="ledgerId" type="text" required />
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
      {value => UrlMaker(value, '/ledgers', 'ledgerId', '/payments')}
    </Info>
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);
LedgerPayments.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/* istanbul ignore next */
function mapStateToProps({ endpointExplorer }) {
  return { endpointExplorer };
}
export default connect(mapStateToProps)(
  withHOCLogic(LedgerPayments, endpointName),
);
