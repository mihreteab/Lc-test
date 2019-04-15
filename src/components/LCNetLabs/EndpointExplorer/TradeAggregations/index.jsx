import React from 'react';
import { SelectGroup } from '../SelectGroup';
import Trade from './Trade';

const options = [{ label: 'Trade Aggregations', component: Trade }];
export default function TradeAggregations() {
  return (
    <SelectGroup title="Select a endpoint" options={options}>
      {({ component: Component, label }) => <Component key={label} />}
    </SelectGroup>
  );
}
