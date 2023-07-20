import { configureChains, createConfig, useNetwork } from 'wagmi'

import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletConnectLegacyConnector } from 'wagmi/connectors/walletConnectLegacy'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { netChain } from '../config/config'

const NetChain = netChain()
const wagmiConfig = () => {

  console.log(NetChain);


  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [NetChain],
    [
      jsonRpcProvider({
        rpc: (chain) => ({
          http: 'https://bsc-testnet.publicnode.com',
        }),
      }),
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

  return { config, chains, publicClient, webSocketPublicClient }
}


export const initWagmi = () => {
  const { config, chains, publicClient, webSocketPublicClient } = wagmiConfig()


  return { config }
}


