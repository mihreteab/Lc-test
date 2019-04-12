import React, { PureComponent } from 'react';
import { SelectGroup } from '../SelectGroup';
import AllEffects from './AllEffects';
import EffectsForAccounts from './EffectsForAccount';
import EffectsForLedger from './EffectsForLedger';
import EffectsForOperations from './EffectsForOperations';
import EffectsForTransactions from './EffectsForTransaction';

const options = [
  { label: 'All Effects', component: AllEffects },
  { label: 'Effects for Ledger', component: EffectsForLedger },
  { label: 'Effects for Operations', component: EffectsForOperations },
  { label: 'Effects for Transaction', component: EffectsForTransactions },
  { label: 'Effects for Account', component: EffectsForAccounts },
];

export default function Assets() {
  return (
    <SelectGroup title="Select a endpoint" options={options}>
      {({ component: Component, label }) => <Component key={label} />}
    </SelectGroup>
  );
}
