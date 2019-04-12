import React, { PureComponent } from 'react';

import { SelectGroup } from '../SelectGroup';
import SingleAccount from './SingleAccount';

const options = [{ label: 'Single Account', component: SingleAccount }];

export default function Account() {
	return (
		<SelectGroup title="Select a endpoint" options={options}>
			{({ component: Component, label }) => <Component key={label} />}
		</SelectGroup>
	);
}
