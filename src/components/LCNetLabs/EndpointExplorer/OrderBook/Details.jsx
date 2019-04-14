import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withHOCLogic } from '../withHOCLogic';
import UrlMaker from '../UrlMaker';
import Form, { ExtendedOptionSpan, Info, SubmitButton } from '../Form';

const endpointName = 'details';

const buyAssets = [
  { label: 'Native', value: 'native', type: 'normal' },
  { label: 'Alphanumeric 4', value: 'credit_alphanum4', type: 'extended' },
  { label: 'Alphanumeric 12', value: 'credit_alphanum12', type: 'extended' },
];
const sellAssets = [
  { label: 'Native', value: 'native', type: 'normal' },
  { label: 'Alphanumeric 4', value: 'credit_alphanum4', type: 'extended' },
  { label: 'Alphanumeric 12', value: 'credit_alphanum12', type: 'extended' },
];

const Details = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <ExtendedOptionSpan
      title="Selling Asset"
      type="options"
      id="sellingAssetType"
      options={sellAssets}
      childOne={{
        id: 'sellingAssetCode',
        placeholder: 'Assets Code',
      }}
      childTwo={{
        id: 'sellingAssetIssuer',
        placeholder: 'Issuer Account ID',
      }}
    />
    <ExtendedOptionSpan
      title="Buying Asset"
      type="options"
      id="buyingAssetType"
      childOne={{
        id: 'buyingAssetCode',
        placeholder: 'Assets Code',
      }}
      childTwo={{
        id: 'buyingAssetIssuer',
        placeholder: 'Issuer Account ID',
      }}
      options={buyAssets}
    />
    <Info method="get" useField="all">
      {value => UrlMaker(value, '/orderBook')}
    </Info>
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);
Details.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/* istanbul ignore next */
function mapStateToProps({ endpointExplorer }) {
  return { endpointExplorer };
}
export default connect(mapStateToProps)(withHOCLogic(Details, endpointName));
