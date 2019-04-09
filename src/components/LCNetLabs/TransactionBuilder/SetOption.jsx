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
import FormTitle from '../../shared/FormTitle';
import FormSubTitle from '../../shared/FormSubTitle';

const Flags = [
  'Authorization required',
  'Authorization revocable',
  'Authorization immutable',
];

export default class SetOption extends PureComponent {
  state = {
    selectedItem: 'Ed25519 Public Key',
    showItems: true,
    selectedSetFlag: 'Authorization required',
    selectedClearFlag: 'Authorization required',
  };

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems,
    }));
  };

  onClickSpan = e => {
    const value = e.target.textContent;
    const name = e.target.id;
    this.setState({ [name]: value });
  };

  render() {
    const {
      selectedSetFlag,
      selectedClearFlag,
      selectedItem,
      showItems,
    } = this.state;
    return (
      <div>
        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>INFLATION DESTINATION</FormTitle>
            <FormSubTitle>(Optional)</FormSubTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="" />
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>SET FLAGS</FormTitle>
          </div>
          <div className="d-flex flex-column col-lg-9 col-md-9 col-sm-12">
            <div className="d-flex">
              {Flags.map(flag => (
                <Span
                  id="selectedSetFlag"
                  key={flag}
                  select={flag === selectedSetFlag}
                  onClick={this.onClickSpan}
                >
                  {flag}
                </Span>
              ))}
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
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>CLEAR FLAGS</FormTitle>
          </div>
          <div className="d-flex flex-column col-lg-9 col-md-9 col-sm-12">
            <div className="d-flex">
              {Flags.slice(0, 2).map(flag => (
                <Span
                  id="selectedClearFlag"
                  key={flag}
                  select={flag === selectedClearFlag}
                  onClick={this.onClickSpan}
                >
                  {flag}
                </Span>
              ))}
            </div>
            <span>Authorization required (1) = 1</span>
            <GreyText>
              Selected flags mean to remove selected flags already present on
              the account.
            </GreyText>
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>MASTER WEIGHT</FormTitle>
            <FormSubTitle>(Optional)</FormSubTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>LOW THRESHOLD</FormTitle>
            <FormSubTitle>(Optional)</FormSubTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>MEDIUM THRESHOLD</FormTitle>
            <FormSubTitle>(Optional)</FormSubTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>HIGH THRESHOLD</FormTitle>
            <FormSubTitle>(Optional)</FormSubTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>SIGNER TYPE</FormTitle>
            <FormSubTitle>(Optional)</FormSubTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
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
          <div className="col-lg-3 col-md-3 col-sm-12" />
          <div className="col-lg-9 col-md-9 col-sm-12">
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
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>HOME DOMINE</FormTitle>
            <FormSubTitle>(Optional)</FormSubTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>SOURCE ACCOUNT</FormTitle>
            <FormSubTitle>(Optional)</FormSubTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>
      </div>
    );
  }
}
