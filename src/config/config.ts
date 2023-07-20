import { bsc, bscTestnet, zkSyncTestnet } from 'wagmi/chains'

//是否是线上环境
export const isOnline = false

export const usdtAddress = '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd'

export const netChain = () => {
  return isOnline ? bsc : bscTestnet
}