import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withHOCLogic } from '../withHOCLogic';
import { STATUS } from 'constants/index';
import Form, { InputField, Info, SubmitButton } from '../Form';

const endpointName = 'singleTransAction';

const SingleTransAction = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <InputField
      title="Transaction Hash"
      id="hashTransaction"
      type="text"
      required
    />
    <Info method="get" useField="hashTransaction">
      {value =>
        `${process.env.REACT_APP_API_URL}/labs/transactions/${
          value === '' ? '{hashTransaction}' : value
        }`
      }
    </Info>
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);
SingleTransAction.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/* istanbul ignore next */
function mapStateToProps({ endpointExplorer }) {
  return { endpointExplorer };
}
export default connect(mapStateToProps)(
  withHOCLogic(SingleTransAction, endpointName),
);
