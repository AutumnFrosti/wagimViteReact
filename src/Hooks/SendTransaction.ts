
import { parseEther, getContract } from 'viem'
import { prepareSendTransaction, waitForTransaction, sendTransaction, getAccount } from 'wagmi/actions'
import { encodeFunctionData } from 'viem'

import wagmiAbi from './abi/Token_abi'
import { publicClient } from '@/plugin/viem/client'
import { usdtAddress } from '@/config/config'


export const transactionToUserHash = async (toAccount: string, value: string) => {

  try {
    const account = getAccount()

    const request = await prepareSendTransaction({
      to: toAccount,
      value: parseEther(value),
      account: account.address
    })

    const { hash } = await sendTransaction(request)

    const data = await waitForTransaction({
      hash,
    })
    console.log(data);
  } catch (error) {
    console.log(error);

  }

}


export const transactionToken20 = async (toAccount: string, value: string) => {
  const account = getAccount()
  // const contract = getContract({
  //   address: usdtAddress,
  //   abi: wagmiAbi,
  //   publicClient,
  // })

  const abiItem = {
    inputs: [{
      "name": "recipient",
      "type": "address"
    },
    {
      "name": "amount",
      "type": "uint256"
    }],
    name: 'transfer',
    outputs: [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }


  const data = encodeFunctionData({
    abi: [abiItem],
    functionName: 'transfer',
    args: [toAccount, parseEther(value)]
  })

  console.log();


  try {
    const request = await prepareSendTransaction({
      account: account.address,
      to: usdtAddress,
      data: data
    })

    const { hash } = await sendTransaction(request)

    const waitdData = await waitForTransaction({
      hash,
    })
    alert(1)
  } catch (error) {
    alert(2)

  }


}

