import React, { Component } from 'react';
import PropTypes from 'prop-types';
import treeChanges from 'tree-changes';
import { exploreEndpoint, showAlert } from 'actions/index';
import { JsonDisplay } from './JsonDisplay';
import Banner from '../../shared/Banner';

import { STATUS } from 'constants/index';

export function withHOCLogic(WrappedComponent, endpointName) {
	return class extends Component {
		divRef = React.createRef();

		static propTypes = {
			dispatch: PropTypes.func.isRequired,
			endpointExplorer: PropTypes.object.isRequired,
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
		componentWillUnmount() {}
		componentDidUpdate({ endpointExplorer }) {
			if (endpointExplorer.status !== this.props.endpointExplorer.status) {
				this.divRef.current.scrollIntoView({ behavior: 'smooth' });
			}
		}
		render() {
			const { endpointExplorer } = this.props;
			return (
				<React.Fragment>
					<WrappedComponent onSubmit={this.onSubmit} {...this.props} />
					<div ref={this.divRef}>
						{endpointExplorer.status === STATUS.RUNNING ? (
							<Banner loading>loading</Banner>
						) : null}
						{endpointExplorer.status === STATUS.READY &&
						endpointExplorer.endpointName === endpointName ? (
							<JsonDisplay
								json={JSON.stringify(
									endpointExplorer.data[endpointName],
									null,
									2,
								)}
							/>
						) : null}
					</div>
				</React.Fragment>
			);
		}
	};
}
