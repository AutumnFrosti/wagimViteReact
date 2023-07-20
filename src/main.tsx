
import './polyfills';


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from '@/redux/index';

import { WagmiConfig } from 'wagmi'
import { initWagmi } from './Hooks/useWagmi';

import '@/index.css'
const { config } = initWagmi()



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <WagmiConfig config={config}>

        <App />
      </WagmiConfig>
    </Provider>
  </React.StrictMode>,
)
