import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import treeChanges from 'tree-changes';
import { exploreEndpoint, showAlert } from 'actions/index';

import { STATUS } from 'constants/index';
import Banner from '../../../shared/Banner';
import Form, { InputField, Info, SubmitButton } from '../Form';
import { JsonDisplay } from '../JsonDisplay';

const endpointName = 'singleAccount';

class SingleAccount extends PureComponent {
  onSubmit = ({ url }) => {
    const { dispatch } = this.props;
    dispatch(exploreEndpoint({ url, endpointName }));
  };
  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
    const { changedTo } = treeChanges(this.props, nextProps);

    if (changedTo('endpointExplorer.status', STATUS.ERROR)) {
      dispatch(
        showAlert(nextProps.endpointExplorer.message, { variant: 'danger' }),
      );
    }
  }
  render() {
    const { endpointExplorer } = this.props;
    return (
      <React.Fragment>
        <Form onSubmit={this.onSubmit}>
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
        {endpointExplorer.status === STATUS.RUNNING ? (
          <Banner loading>loading</Banner>
        ) : null}
        {endpointExplorer.status === STATUS.READY ? (
          <JsonDisplay
            json={JSON.stringify(endpointExplorer.data[endpointName], null, 2)}
          />
        ) : null}
      </React.Fragment>
    );
  }
}
/* istanbul ignore next */
function mapStateToProps({ endpointExplorer }) {
  return { endpointExplorer };
}
SingleAccount.propTypes = {
  dispatch: PropTypes.func.isRequired,
  endpointExplorer: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(SingleAccount);
