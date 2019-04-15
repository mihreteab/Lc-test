import React from 'react';
import { SelectGroup } from '../SelectGroup';

import AllTransactions from './AllTransactions';
import SingleTransaction from './SingleTransaction';
import PostTransaction from './PostTransaction';
import TransactionsForAccount from './TransactionsForAccount';
import TransactionsForLedger from './TransactionsForLedger';

const options = [
  { label: 'All Transactions', component: AllTransactions },
  { label: 'Single Transaction', component: SingleTransaction },
  { label: 'Post Transaction', component: PostTransaction },
  { label: 'Transactions for Account', component: TransactionsForAccount },
  { label: 'Transactions for Ledger', component: TransactionsForLedger },
];
export default function Transactions() {
  return (
    <SelectGroup title="Select a endpoint" options={options}>
      {({ component: Component, label }) => <Component key={label} />}
    </SelectGroup>
  );
}
