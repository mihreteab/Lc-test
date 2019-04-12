import React, { PureComponent } from 'react';
import { SelectGroup } from '../SelectGroup';
import SingleLedger from './SingleLedger';
import OffersForAccount from './OffersForAccount';

const options = [{ label: 'Offers for account', component: OffersForAccount }];
export default function AccountOffers() {
  return (
    <SelectGroup title="Select a endpoint" options={options}>
      {({ component: Component, label }) => <Component key={label} />}
    </SelectGroup>
  );
}
