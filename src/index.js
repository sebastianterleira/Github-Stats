import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';

import App from './App';
import { global, reset } from './styles';
import { AuthProvider } from './context/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <Global styles={reset} />
    <Global styles={global} />
    <App />
  </AuthProvider>
);

