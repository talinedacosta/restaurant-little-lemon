import React from 'react';

import '@fontsource/karla/400.css'
import '@fontsource/markazi-text/500.css'
import '@fontsource/markazi-text/700.css'

import {
  ChakraProvider,
} from '@chakra-ui/react';
import theme from './theme'
import Home from './page/Home';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <Home />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
