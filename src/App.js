import React from 'react';

import '@fontsource/karla/400.css'
import '@fontsource/markazi-text/500.css'
import '@fontsource/markazi-text/700.css'

import {
  ChakraProvider,
} from '@chakra-ui/react';
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
    </ChakraProvider>
  );
}

export default App;
