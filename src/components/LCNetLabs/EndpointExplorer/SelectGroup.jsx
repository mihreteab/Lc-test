// @format
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper from '../../shared/Wrapper';
import Title from '../../shared/Title';
import ResourceTabs from './ResourceTabs';

export class SelectGroup extends Component {
  state = {
    selectedOption: undefined,
  };

  onOptionChange = e => {
    this.setState({ selectedOption: e.target.textContent });
  };

  render() {
    const { selectedOption } = this.state;
    const { title, options, children } = this.props;
    return (
      <Wrapper className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
        <Title>
          <p
            style={{
              fontSize: '18px',
            }}
          >
            {title.toUpperCase()}
          </p>
          {options.map(({ label }, i) => (
            <ResourceTabs
              activeOption={selectedOption === label}
              onClick={this.onOptionChange}
              key={i}
              options="true"
            >
              {label}
            </ResourceTabs>
          ))}
        </Title>
        {options
          .filter(option => selectedOption === option.label)
          .map(children)}
      </Wrapper>
    );
  }
}

SelectGroup.propTypes = {
  children: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.func.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  title: PropTypes.string.isRequired,
};
