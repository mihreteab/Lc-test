import React, { PureComponent } from 'react';
import { SelectGroup } from '../SelectGroup';
import SingleOperations from './SingleOperations';
import OperationsForAccount from './OperationsForAccount';
import OperationsForLedger from './OperationsForLedger';
import OperationsForTransactions from './OperationsForTransactions';
import AllOperations from './AllOperations';

const options = [
  { label: 'All Operations', component: AllOperations },
  { label: 'Single Operations', component: SingleOperations },
  { label: 'Operations for Account', component: OperationsForAccount },
  { label: 'Operations for Ledger', component: OperationsForLedger },
  { label: 'Operations for Transaction', component: OperationsForTransactions },
];
export default function Operations() {
  return (
    <SelectGroup title="Select a endpoint" options={options}>
      {({ component: Component, label }) => <Component key={label} />}
    </SelectGroup>
  );
}
