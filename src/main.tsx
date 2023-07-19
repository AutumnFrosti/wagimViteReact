
import './polyfills';


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from '@/redux/index';

import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { bsc, bscTestnet } from 'wagmi/chains'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletConnectLegacyConnector } from 'wagmi/connectors/walletConnectLegacy'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { publicProvider } from 'wagmi/providers/public'
import '@/index.css'


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bsc, bscTestnet],
  [
    // publicProvider(),
    // jsonRpcProvider({
    //   rpc: (chain) => {
    //     if (chain.id !== 97 && chain.id !== 56) return null
    //     return { http: chain.rpcUrls.default.http[0] }
    //   },
    // }),
    publicProvider()
  ]
)

const config = createConfig({
  autoConnect: true,
  connectors: [
    new InjectedConnector({
      chains,
      options: {
        name: (detectedName) =>
          `Injected (${typeof detectedName === 'string'
            ? detectedName
            : detectedName.join(', ')
          })`,
      },
    }),
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: 'd6d2ea10db944ad2af625e140a7a960b',
      },
    }),

  ],
  publicClient,
  webSocketPublicClient,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <WagmiConfig config={config}>

        <App />
      </WagmiConfig>
    </Provider>
  </React.StrictMode>,
)
