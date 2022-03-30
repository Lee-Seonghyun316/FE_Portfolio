import React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Head from './components/Head';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head />
      <AboutMe />
      <Skills />
    </ThemeProvider>
  );
}

export default App;
