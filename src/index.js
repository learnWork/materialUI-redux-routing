import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import listApp from './reducers'
import App from './components/App'
import theme from './components/theme';

const store = createStore(listApp)
ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {/*<Root store={store}/>*/}
    <Provider store={store}>
      <Router>
        <Route path="/:filter?" component={App} />
      </Router>
    </Provider>
  </ThemeProvider>,
  document.querySelector('#root'),
);
{/*console.log("store",store.getState().items)*/}
