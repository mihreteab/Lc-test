import React from 'react';
import { SelectGroup } from '../SelectGroup';
import AllAssets from './AllAssets';

const options = [{ label: 'All Assets', component: AllAssets }];
export default function Assets() {
  return (
    <SelectGroup title="Select a endpoint" options={options}>
      {({ component: Component, label }) => <Component key={label} />}
    </SelectGroup>
  );
}
