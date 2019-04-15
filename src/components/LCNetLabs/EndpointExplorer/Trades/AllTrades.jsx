import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withHOCLogic } from '../withHOCLogic';
import UrlMaker from '../UrlMaker';
import Form, {
  ExtendedOptionSpan,
  Info,
  InputField,
  OptionSpan,
  SubmitButton,
} from '../Form';

const endpointName = 'AllTrades';
const order = ['asc', 'desc'];

const baseAssetTypes = [
  { label: 'Native', value: 'native', type: 'normal' },
  { label: 'Alphanumeric 4', value: 'credit_alphanum4', type: 'extended' },
  { label: 'Alphanumeric 12', value: 'credit_alphanum12', type: 'extended' },
];

const counterAssetTypes = [
  { label: 'Native', value: 'native', type: 'normal' },
  { label: 'Alphanumeric 4', value: 'credit_alphanum4', type: 'extended' },
  { label: 'Alphanumeric 12', value: 'credit_alphanum12', type: 'extended' },
];

const AllTrades = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <ExtendedOptionSpan
      title="Base Asset"
      type="options"
      subtitle="(Optional)"
      id="baseAssetType"
      options={baseAssetTypes}
      childOne={{
        id: 'baseAssetCode',
        placeholder: 'Assets Code',
      }}
      childTwo={{
        id: 'baseAssetIssuer',
        placeholder: 'Issuer Account ID',
      }}
    />
    <ExtendedOptionSpan
      title="Counter Asset"
      type="options"
      id="counterAssetType"
      options={counterAssetTypes}
      childOne={{
        id: 'counterAssetCode',
        placeholder: 'Assets Code',
      }}
      childTwo={{
        id: 'counterAssetIssuer',
        placeholder: 'Issuer Account ID',
      }}
    />

    <InputField title="Offer ID" id="offerId" type="text" required />
    <InputField title="Cursor" id="cursor " type="text" required />

    <InputField
      title="Limit"
      subtitle="(Optional)"
      id="limit"
      type="number"
      min="1"
      required
    />

    <OptionSpan title="Order" type="options" id="order" options={order} />

    <Info method="get" useField="all">
      {value => UrlMaker(value, '/trades')}
    </Info>
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);
AllTrades.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/* istanbul ignore next */
function mapStateToProps({ endpointExplorer }) {
  return { endpointExplorer };
}
export default connect(mapStateToProps)(withHOCLogic(AllTrades, endpointName));
