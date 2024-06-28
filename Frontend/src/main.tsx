/**
 * Entry point of the application.
 * Renders the root component of the React app.
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react' 
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider> 
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
