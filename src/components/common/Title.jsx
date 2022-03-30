import styled from 'styled-components';
import React from 'react';

const Title = ({ text }) => <Text>{text}</Text>;

export default Title;

const Text = styled.h1`
  padding: 2rem;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 900;
  text-align: center;
  line-height: ${({ theme }) => theme.fontSize.xLarge};
  text-decoration: underline;
  text-underline-position: under;
`;
