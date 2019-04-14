import React from 'react';
import { SelectGroup } from '../SelectGroup';
import OffersForAccount from './OffersForAccount';

const options = [{ label: 'Offers for account', component: OffersForAccount }];
export default function Offers() {
  return (
    <SelectGroup title="Select a endpoint" options={options}>
      {({ component: Component, label }) => <Component key={label} />}
    </SelectGroup>
  );
}
