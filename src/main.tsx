import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App';
import './index.css';
import customTheme from "./theme"

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ChakraProvider  theme={customTheme}>
        <ColorModeScript initialColorMode={customTheme.config.initialColorMode}/>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
