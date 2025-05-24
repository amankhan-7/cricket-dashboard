import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import GlobalStoreProvider from './contexts/GlobalStoreProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStoreProvider>
      <App />
    </GlobalStoreProvider>
  </React.StrictMode>
);
