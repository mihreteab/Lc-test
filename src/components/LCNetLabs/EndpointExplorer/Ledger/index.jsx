import React from 'react';
import { SelectGroup } from '../SelectGroup';
import SingleLedger from './SingleLedger';
import AllLedgers from './AllLedgers';

const options = [
  { label: 'All Ledgers', component: AllLedgers },
  { label: 'Single Ledger', component: SingleLedger },
];
export default function Ledgers() {
  return (
    <SelectGroup title="Select a endpoint" options={options}>
      {({ component: Component, label }) => <Component key={label} />}
    </SelectGroup>
  );
}
