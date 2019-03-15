import React from 'react';
import styled from 'styled-components';

import Github from 'containers/GitHub';

import { Box, Container, Heading, Link, Paragraph, Screen, Text, utils } from 'styled-minimal';

import HeaderComponent from '../components/Header';
import Laboratory from '../components/Laboratory';
const Header = styled.div`
  margin-bottom: ${utils.spacer(3)};
  text-align: center;
`;

const Private = () => (
  <Screen key="Private" data-testid="PrivateWrapper">
    <Container verticalPadding>{/* <Laboratory /> */}</Container>
  </Screen>
);

export default Private;
