import { createPublicClient, http } from 'viem'
import { netChain } from '@/config/config'
const NetChain = netChain()

export const publicClient = createPublicClient({
  chain: NetChain,
  transport: http(),
})