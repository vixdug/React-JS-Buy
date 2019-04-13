import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import Client from 'shopify-buy';
import { Provider } from 'react-redux';
import store from './store';

const client = Client.buildClient({
    storefrontAccessToken: 'cebcc0633d451fc301777269dd25cd83',
    domain: 'plant-dyed-goods.myshopify.com'
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,  
    document.getElementById('root')
  );
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
