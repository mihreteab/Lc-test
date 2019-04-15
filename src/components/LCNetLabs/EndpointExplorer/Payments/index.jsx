import React from 'react';

import { SelectGroup } from '../SelectGroup';
import PaymentsForAccount from './PaymentsForAccount';
import PaymentsForLedger from './PaymentsForLedger';
import PaymentsForTransactions from './PaymentsForTransactions';
import AllPayments from './AllPayments';

const options = [
  { label: 'All Payments', component: AllPayments },
  { label: 'Payments for Account', component: PaymentsForAccount },
  { label: 'Payments for Ledger', component: PaymentsForLedger },
  { label: 'Payments for Transaction', component: PaymentsForTransactions },
];
export default function Payments() {
  return (
    <SelectGroup title="Select a endpoint" options={options}>
      {({ component: Component, label }) => <Component key={label} />}
    </SelectGroup>
  );
}
