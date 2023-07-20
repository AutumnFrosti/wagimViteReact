
import Web3 from "web3";
import { divide, multiply } from '@/utils/BigNumber'
import { defaultRpc } from './useWagmi'


export const initWeb3 = () => {
  const { Rpc } = defaultRpc()


  const web3 = new Web3(Rpc)

  return { web3 }

}


export const CalculationAccuracy = (
  value: string,
  accuracy: number
): string => {
  if (accuracy === 18) {
    const { web3 } = initWeb3()
    return web3.utils.fromWei(value, 'ether')
  }
  // 将value 除以另一个数
  return divide(value, '1' + '0'.repeat(accuracy))
}


export const TokenMultiply = (value: string, accuracy: number): string => {

  if (accuracy === 18) {
    const { web3 } = initWeb3()
    return web3.utils.toWei(value, 'ether')
  }
  // 将value 乘以另一个数
  return multiply(value, '1' + '0'.repeat(accuracy))
}
