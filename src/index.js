import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const nonce = document.querySelector('meta[property="csp-nonce"]').content;

const cache = createCache({
  key: "emotion-cache-key",
  nonce: nonce,
  prepend: true,
});

ReactDOM.render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <App />
    </CacheProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
