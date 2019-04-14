import React from 'react';
import { SelectGroup } from '../SelectGroup';
import FindPaymentPaths from './FindPaymentPaths';

const options = [{ label: 'Find Payment paths', component: FindPaymentPaths }];
export default function Paths() {
  return (
    <SelectGroup title="Select a endpoint" options={options}>
      {({ component: Component, label }) => <Component key={label} />}
    </SelectGroup>
  );
}
