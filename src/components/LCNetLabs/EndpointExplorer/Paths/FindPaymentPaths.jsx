import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withHOCLogic } from '../withHOCLogic';
import UrlMaker from '../UrlMaker';
import Form, {
  ExtendedOptionSpan,
  Info,
  InputField,
  SubmitButton,
} from '../Form';

const endpointName = 'FindPaymentByPaths';

const destinationAssetTypes = [
  { label: 'Native', value: 'native', type: 'normal' },
  { label: 'Alphanumeric 4', value: 'credit_alphanum4', type: 'extended' },
  { label: 'Alphanumeric 12', value: 'credit_alphanum12', type: 'extended' },
];

const FindPaymentByPaths = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <InputField
      title="Source Account"
      id="sourceAccount"
      type="text"
      required
    />
    <InputField
      title="Destination Account"
      id="destinationAccount"
      type="text"
      required
    />
    <ExtendedOptionSpan
      title="Destination Asset"
      type="options"
      id="destinationAssetType"
      options={destinationAssetTypes}
      childOne={{
        id: 'destinationAssetCode',
        placeholder: 'Assets Code',
      }}
      childTwo={{
        id: 'destinationAssetIssuer',
        placeholder: 'Issuer Account ID',
      }}
    />
    <InputField
      title="Destination Amount"
      id="destinationAmount"
      type="number"
      min="1"
      required
    />
    <Info method="get" useField="all">
      {value => UrlMaker(value, '/paths')}
    </Info>
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);
FindPaymentByPaths.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/* istanbul ignore next */
function mapStateToProps({ endpointExplorer }) {
  return { endpointExplorer };
}
export default connect(mapStateToProps)(
  withHOCLogic(FindPaymentByPaths, endpointName),
);
