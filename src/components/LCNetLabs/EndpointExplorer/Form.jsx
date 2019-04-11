// @format
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from '../../shared/Box';
import FormTitle from '../../shared/FormTitle';
import FormSubTitle from '../../shared/FormSubTitle';
import InputContainerLarge from '../../shared/InputContainerLarge';

const FormContext = React.createContext({
  Fields: [],
  onChange: () => null,
  onSubmit: () => null,
  getUrl: () => null,
});

const Button = styled.button`
  background: #0084f8;
  border-radius: 4px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  margin-top: 15px;
`;
const Hr = styled.hr`
  height: 1px;
  margin: 2em;
  border: 0;
  background: #dedfe0;
`;
const InfoBox = styled.div`
  word-break: break-all;
  padding: 0.75em 1em;
  flex: 12 0 100%;
  width: auto;
`;
const Method = styled.span`
  display: inline-block;
  padding: 0.4em 0.75em;
  margin-right: 1em;
  background: #f4f4f5;
  font-size: 16px;
  border-radius: 3px;
`;
const URL = styled.span`
  cursor: pointer;
  font-size: 16px;
  border-bottom: 1px dotted currentColor;
`;

export const Info = ({ method, children, useField }) => (
  <FormContext.Consumer>
    {({ Fields, getUrl }) =>
      Fields.filter(i => i.id === useField).map((item, index) => {
        getUrl(children(item.value), method.toUpperCase());
        return (
          <InfoBox key={index}>
            <Method>{method.toUpperCase()}</Method>
            <URL>{children(item.value)}</URL>
          </InfoBox>
        );
      })
    }
  </FormContext.Consumer>
);
Info.propTypes = {
  children: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  useField: PropTypes.string.isRequired,
};
export const SubmitButton = ({ children, type }) => (
  <FormContext.Consumer>
    {({ onSubmit }) => (
      <div className="row">
        <Button type={type} onClick={onSubmit}>
          {children}
        </Button>
      </div>
    )}
  </FormContext.Consumer>
);

SubmitButton.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export const InputField = ({ id, title, subtitle, type }) => (
  <FormContext.Consumer>
    {({ Fields, onChange }) =>
      Fields.filter(f => f.id === `${id}`).map(i => (
        <React.Fragment key={i.id}>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 px-0">
              <FormTitle>{title}</FormTitle>
              {subtitle ? <FormSubTitle>(Optional)</FormSubTitle> : null}
            </div>
            <InputContainerLarge
              className="col-lg-9 col-md-8 col-sm-12"
              placeholdrer="
    Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
              value={i.value}
              type={type}
              onChange={e => onChange.call(null, e, i.id)}
            />
          </div>

          <Hr />
        </React.Fragment>
      ))
    }
  </FormContext.Consumer>
);
InputField.propTypes = {
  id: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default class Form extends PureComponent {
  state = {
    Fields: [],
    url: '',
    method: '',
    onChange: () => {},
    onSubmit: () => {},
    getUrl: () => {},
  };

  componentDidMount = () => {
    const { children } = this.props;
    const { Fields } = this.state;
    let newState = [...Fields];
    React.Children.forEach(children, ({ props }) => {
      if (props.type && props.type !== 'submit') {
        newState = [
          ...newState,
          { id: `${props.id}`, value: props.value || '' },
        ];
      }
    });
    this.setState({
      Fields: newState,
      onChange: this.onChangeHandler,
      onSubmit: this.onSubmitHandler,
      getUrl: this.getUrl,
    });
  };

  getUrl = (url, method) =>
    this.setState({
      url,
      method,
    });

  onChangeHandler = ({ target }, id) => {
    const { Fields } = this.state;
    const newState = Fields.map(i =>
      i.id === id ? { ...i, value: target.value } : i,
    );
    this.setState({ Fields: newState });
  };

  onSubmitHandler = () => {
    const { Fields, url, method } = this.state;
    const { onSubmit } = this.props;
    const obj = { url, method };
    Fields.forEach(field => (obj[field.id] = field.value));
    onSubmit(obj);
  };

  render() {
    const { children } = this.props;
    return (
      <FormContext.Provider value={this.state}>
        <Box padding="40px">{children}</Box>
      </FormContext.Provider>
    );
  }
}

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
