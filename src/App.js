import React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Head from './components/Head';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Career from './components/Career';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head />
      <Skills />
      <Career />
      <Projects />
      <AboutMe />
    </ThemeProvider>
  );
}

export default App;
