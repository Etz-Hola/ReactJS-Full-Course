import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {mode} from "@chakra-ui/theme-tools"
import { extendTheme } from '@chakra-ui/theme-utils'

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAilpha:900")(props),
      bg: mode("gray.100", "#101010")(props),
    },
  }),
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
