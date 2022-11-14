import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import store from "./store/store";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './index.scss';
import "./style/reset.scss";
const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 320,
      md: 600,
      lg: 835,
      xl: 1473,
    }
  }
})

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
