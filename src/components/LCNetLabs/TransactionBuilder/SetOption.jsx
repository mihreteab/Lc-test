import React, { PureComponent } from 'react';

import SelectBoxWrapper from './SelectBoxWrapper';
import SelectBoxContainer from './SelectBoxContainer';
import SelectedItem from './SelectedItem';
import Arrow from './Arrow';
import ArrowDir from './ArrowDir';
import Item from './Item';
import ItemWrapper from './ItemWrapper';
import TextSpan from './TextSpan';

import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';
import GreyText from './GreyText';

const Flags = [
  'Authorization required',
  'Authorization revocable',
  'Authorization immutable',
];

export default class SetOption extends PureComponent {
  state = {
    selectedSpan: 'Authorization required',
    selectedItem: 'Ed25519 Public Key',
    showItems: true,
  };

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems,
    }));
  };

  onClickSpan = e => {
    this.setState({ selectedSpan: e.target.innerText });
  };

  render() {
    const { selectedSpan, selectedItem, showItems } = this.state;
    return (
      <div>
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">INFLATION DESTINATION</h2>
            <span className="ml-3">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">SET FLAGS</h2>
          </div>
          <div className="d-flex flex-column col-md-8">
            <div className="d-flex">
              {Flags.map(flag => {
                return (
                  <Span
                    key={flag}
                    select={flag === selectedSpan ? true : false}
                    onClick={this.onClickSpan}
                  >
                    {flag}
                  </Span>
                );
              })}
            </div>
            <span>
              {`Authorization immutable (4) + Authorization revocable (2) +
              Authorization required (1) = 7`}
            </span>
            <GreyText>
              Selected flags mean to add selected flags in addition to flags
              already present on the account.
            </GreyText>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">CLEAR FLAGS</h2>
          </div>
          <div className="d-flex flex-column col-md-8">
            <div className="d-flex">
              <Span select={true} onClick={this.onClickSpan}>
                Authorization required
              </Span>
              <Span onClick={this.onClickSpan}>Authorization revocable</Span>
            </div>
            <span>Authorization required (1) = 1</span>
            <GreyText>
              Selected flags mean to remove selected flags already present on
              the account.
            </GreyText>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">MASTER WEIGHT</h2>
            <span className="ml-3">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">LOW THRESHOLD</h2>
            <span className="ml-3">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">MEDIUM THRESHOLD</h2>
            <span className="ml-3">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">HIGH THRESHOLD</h2>
            <span className="ml-3">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">SIGNER TYPE</h2>
            <span className="ml-3">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <SelectBoxWrapper top="0px">
              <SelectBoxContainer>
                <SelectedItem>{selectedItem}</SelectedItem>
                <Arrow onClick={this.dropDown}>
                  {showItems ? (
                    <ArrowDir down="true" />
                  ) : (
                    <ArrowDir up="true" />
                  )}
                </Arrow>
              </SelectBoxContainer>

              <ItemWrapper show={showItems}>
                <Item selected={true}>{selectedItem}</Item>
              </ItemWrapper>
              <TextSpan className="mt-2" top="65px">
                {'Sets various configuration options for an account.'}
              </TextSpan>
            </SelectBoxWrapper>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12" />
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge
              className="mb-2"
              value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />

            <InputContainerLarge className="mb-2" value="0.255" />

            <TextSpan>
              Signer will be removed from account if this weight is 0.
            </TextSpan>

            <TextSpan>
              Used to add/remove or adjust weight of an additional signer on the
              account.
            </TextSpan>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">HOME DOMINE</h2>
            <span className="ml-3">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">SOURCE ACCOUNT</h2>
            <span className="ml-3">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>
      </div>
    );
  }
}
