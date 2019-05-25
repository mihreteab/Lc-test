import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <div style={{ width: '100%', paddingLeft: '50px', display: 'flex' }}>
        <input
          style={{
            height: '40px',
            border: 'none',
            width: '100%',
            borderRadius: '2px 0 0 2px ',
            padding: '6px 12px',
          }}
          placeholder="Search by Address / Txhash / Block / Token / Ens"
        />
        <button
          style={{
            width: '160px',
            color: '#087BE0',
            background: '#F0F5F9',
            borderRadius: '0 2px 2px 0',
            fontWeight: '700',
            fontSize: '12px',
          }}
          className="search-form-btn"
        >
          SEARCH
        </button>
      </div>
    );
  }
}
export default SearchBox;
