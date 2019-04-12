import React, { PureComponent } from 'react';

import { SelectGroup } from '../SelectGroup';
import TradesForAccount from './TradesForAccount';
import AllTrades from './AllTrades';
import TradesForOffer from './TradesForOffer';

const options = [
  { label: 'All Trades', component: AllTrades },
  { label: 'Trades for Account', component: TradesForAccount },
  { label: 'Trades for Offer', component: TradesForOffer },
];
export default function Operations() {
  return (
    <SelectGroup title="Select a endpoint" options={options}>
      {({ component: Component, label }) => <Component key={label} />}
    </SelectGroup>
  );
}
