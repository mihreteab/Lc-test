import React, { PureComponent, Fragment } from 'react';

// import './index.css';
import SelectBoxWrapper from './SelectBoxWrapper';
import SelectBoxContainer from './SelectBoxContainer';
import SelectedItem from './SelectedItem';
import Arrow from './Arrow';
import ArrowDir from './ArrowDir';
import Items from './Items';
import TextSpan from '../TextSpan';

class SelectBox extends PureComponent {
  state = {
    selectedItem: this.props.items[0],
    showItems: false,
  };

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems,
    }));
  };

  selectItem = item => {
    this.setState({
      selectedItem: item,
      showItems: false,
    });
  };

  render() {
    const { selectedItem, showItems } = this.state;
    const { items } = this.props;
    return (
      <Fragment>
        <SelectBoxWrapper>
          {/* -- */}
          <SelectBoxContainer>
            <SelectedItem>{selectedItem.title}</SelectedItem>
            <Arrow onClick={this.dropDown}>
              {showItems ? <ArrowDir up="true" /> : <ArrowDir down="true" />}
            </Arrow>
          </SelectBoxContainer>
          <TextSpan className="mt-2">{selectedItem.subTitle}</TextSpan>
          <div style={{ display: showItems ? 'block' : 'none' }}>
            {items.map(item => (
              <Items
                key={item.title}
                onClick={() => this.selectItem(item)}
                selected={selectedItem === item ? 'true' : ''}
              >
                {item.title}
              </Items>
            ))}
          </div>
        </SelectBoxWrapper>
        {/* <input type="hidden" name={this.state.name} value={selectedItem.id} /> */}
      </Fragment>
    );
  }
}

export default SelectBox;
