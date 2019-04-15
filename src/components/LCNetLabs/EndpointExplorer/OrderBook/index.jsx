import React from 'react';
import { SelectGroup } from '../SelectGroup';
import Details from './Details';

const options = [{ label: 'Detials', component: Details }];

export default function OrderBook() {
  return (
    <SelectGroup title="Select a endpoint" options={options}>
      {({ component: Component, label }) => <Component key={label} />}
    </SelectGroup>
  );
}
