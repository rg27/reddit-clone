import { ChakraProvider } from "@chakra-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import 'semantic-ui-css/semantic.min.css'

import './assets/style.css';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
