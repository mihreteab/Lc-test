import React, { Component } from 'react';
import ToggleButton from './ToggleButton';
import SearchBox from './SearchBox';

class SearchBoxContainer extends Component {
  render() {
    return (
      <div style={{ height: '134px', width: '100%', background: '#0084F8' }}>
        <div className="mx-5" style={{ height: '134px', paddingTop: '20px' }}>
          <div
            className="h4"
            style={{
              fontWeight: '700',
              fontSize: '18px',
              lineHeight: '31px',
              marginBottom: '15px',
              color: '#fff',
            }}
          >
            LC Net Blockchain Explorer
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <ToggleButton />
            <SearchBox />
          </div>
        </div>
      </div>
    );
  }
}
export default SearchBoxContainer;
