// @flow
// @format
/**
 * @module Actions/EndpointExplorer
 * @desc EndpointExplorer Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const { exploreEndpoint } = createActions({
  [ActionTypes.EXPLORE_ENDPOINT]: (payload: {
    url: string,
    endpointName: string,
  }) => payload,
});
