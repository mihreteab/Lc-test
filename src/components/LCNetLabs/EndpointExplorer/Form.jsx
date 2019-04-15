// @format
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Span from '../../shared/Span';
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

export const ExtendedOptionSpan = ({
  options,
  childOne,
  childTwo,
  id,
  title,
  subtitle,
}) => {
  // State =
  const [currentSpan, setCurrentSpan] = React.useState('');
  const [extended, setExtended] = React.useState(false);
  const [assetCode, setAssetCode] = React.useState('');
  const [issuerAccountId, setIssuerAccountId] = React.useState('');
  const FormContextConsumer = React.useContext(FormContext);

  const JSXMaker = () =>
    options.map(obj => (
      <Span
        id={id}
        value={obj.value}
        key={obj.value}
        onClick={e =>
          options
            .filter(i => i.label === e.target.textContent)
            .map(o => setCurrentSpan(o.value))
        }
        select={obj.value === currentSpan}
      >
        {obj.label}
      </Span>
    ));
  React.useEffect(() => {
    options
      .filter(o => o.value === currentSpan)
      .map(i => {
        if (i.type !== 'normal') {
          return setExtended(true);
        }
        return setExtended(false);
      });
    FormContextConsumer.Fields.filter(i => i.id === id).map(item =>
      FormContextConsumer.onChange(
        {
          [id]: currentSpan,
          ...(extended
            ? { [childOne.id]: assetCode, [childTwo.id]: issuerAccountId }
            : null),
        },
        item.id,
      ),
    );
  }, [currentSpan, extended, assetCode, issuerAccountId]);
  return FormContextConsumer.Fields.filter(i => i.id === id).map((item, i) => (
    <React.Fragment key={i}>
      <div className="row" key={i}>
        <div className="col-lg-3 col-md-4 col-sm-12 px-0">
          <FormTitle>{title}</FormTitle>
          {subtitle ? <FormSubTitle>(Optional)</FormSubTitle> : null}
        </div>
        {JSXMaker()}
        {extended ? (
          <React.Fragment>
            <InputContainerLarge
              style={{
                width: '70%',
                marginTop: '0.5em',
                marginLeft: '25%',
                marginBottom: '0.5em',
              }}
              id={childOne.id}
              type="text"
              value={assetCode}
              onChange={e => setAssetCode(e.target.value)}
              placeholder={childOne.placeholder}
              required
            />
            <InputContainerLarge
              style={{
                width: '70%',
                marginTop: '0.5em',
                marginLeft: '25%',
                marginBottom: '0.5em',
              }}
              id={childTwo.id}
              value={issuerAccountId}
              onChange={e => setIssuerAccountId(e.target.value)}
              type="text"
              placeholder={childTwo.placeholder}
              required
            />
          </React.Fragment>
        ) : null}
      </div>
      <Hr />
    </React.Fragment>
  ));
};
ExtendedOptionSpan.propTypes = {
  childOne: PropTypes.object.isRequired,
  childTwo: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};
export const OptionSpan = ({ options, id, title, subtitle }) => {
  const jsx = (changeHandler, item, i) => (
    <div className="row" key={i}>
      <div className="col-lg-3 col-md-4 col-sm-12 px-0">
        <FormTitle>{title}</FormTitle>
        {subtitle ? <FormSubTitle>(Optional)</FormSubTitle> : null}
      </div>
      {options.map(key => (
        <Span
          id={id}
          value={key}
          key={key}
          onClick={e => changeHandler.call(null, e.target.textContent, id)}
          select={key === item.value}
        >
          {key}
        </Span>
      ))}
    </div>
  );
  return (
    <FormContext.Consumer>
      {({ Fields, onChange }) =>
        Fields.filter(i => i.id === id).map((item, i) => (
          <div key={i}>
            {jsx(onChange, item, i)} <Hr />
          </div>
        ))
      }
    </FormContext.Consumer>
  );
};

OptionSpan.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export const Info = ({ method, children, useField }) => {
  const jsx = (url, index = 1) => (
    <InfoBox key={index}>
      <Method>{method.toUpperCase()}</Method>
      <URL>{url}</URL>
    </InfoBox>
  );

  return (
    <FormContext.Consumer>
      {({ Fields, getUrl }) => {
        if (useField === 'all') {
          const obj = {};
          Fields.forEach(field => {
            if (typeof field.value === 'object') {
              return Object.keys(field.value).map(
                key => (obj[key] = field.value[key]),
              );
            }
            return (obj[field.id] = field.value);
          });
          const url = children(obj);
          getUrl(url, method.toUpperCase());
          return jsx(url);
        }
        return Fields.filter(i => i.id === useField).map(({ value }, index) => {
          const url = children(value);
          getUrl(url, method.toUpperCase());
          return jsx(url, index);
        });
      }}
    </FormContext.Consumer>
  );
};
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
export const InputField = ({ id, title, subtitle, type, ...props }) => (
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
              {...props}
              onChange={e => onChange.call(null, e.target.value, i.id)}
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

  onChangeHandler = (value, id) => {
    const { Fields } = this.state;
    const newState = Fields.map(i => (i.id === id ? { ...i, value } : i));
    this.setState({ Fields: newState });
  };

  onSubmitHandler = () => {
    const { Fields, url, method } = this.state;
    const { onSubmit } = this.props;
    const obj = { url, method };
    Fields.forEach(field => {
      if (typeof field.value === 'object') {
        return Object.keys(field.value).map(
          key => (obj[key] = field.value[key]),
        );
      }
      return (obj[field.id] = field.value);
    });
    console.log(obj);
    onSubmit(obj);
  };

  render() {
    console.log(this.state);
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
