import React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Head from './components/Head';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head />
      <AboutMe />
      <Skills />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
