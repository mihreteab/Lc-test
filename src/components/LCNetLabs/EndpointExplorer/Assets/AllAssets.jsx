import React, { Component } from 'react';
import Form, { InputField, Info, OptionSpan, SubmitButton } from '../Form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import treeChanges from 'tree-changes';
import { exploreEndpoint, showAlert } from 'actions/index';

import { STATUS } from 'constants/index';
import Banner from '../../../shared/Banner';
import { JsonDisplay } from '../JsonDisplay';

const endpointName = 'allAssets';

const options = ['asc', 'desc'];

class AllAssets extends Component {
	UrlMaker = obj => {
		let url = `${process.env.REACT_APP_API_URL}/labs/assets?`;
		Object.keys(obj).forEach(key => {
			if (obj[key] !== '') {
				url += `${key}=${obj[key]}&`;
			}
		});
		return url.substring(0, url.length - 1);
	};

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
					<OptionSpan
						title="Order"
						type="options"
						id="order"
						options={options}
					/>
					<Info method="get" useField="all">
						{value => this.UrlMaker(value)}
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
AllAssets.propTypes = {
	dispatch: PropTypes.func.isRequired,
	endpointExplorer: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(AllAssets);
