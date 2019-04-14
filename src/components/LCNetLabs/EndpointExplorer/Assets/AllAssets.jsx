import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withHOCLogic } from '../withHOCLogic';
import UrlMaker from '../UrlMaker';
import Form, { InputField, OptionSpan, Info, SubmitButton } from '../Form';

const endpointName = 'allAssets';

const options = ['asc', 'desc'];

const AllAssets = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <InputField
      title="Asset Code"
      subtitle="(optional)"
      id="assetCode"
      type="text"
      required
    />
    <InputField
      title="Asset Issuer"
      subtitle="(optional)"
      id="assetIssuer"
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
    <Info method="get" useField="all">
      {value => UrlMaker(value, '/assets')}
    </Info>
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);
AllAssets.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/* istanbul ignore next */
function mapStateToProps({ endpointExplorer }) {
  return { endpointExplorer };
}
export default connect(mapStateToProps)(withHOCLogic(AllAssets, endpointName));
