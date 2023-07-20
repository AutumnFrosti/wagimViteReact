import ConnectWallet from "@/components/ConnectWallet"
// import { SendTransaction } from "@/components/senddemo"
import { Input, Button } from "antd"
import { useState } from "react"

import { useDebounce } from 'use-debounce'
import { transactionToken20 } from "@/Hooks/SendTransaction"

export default function Exchange() {


  return (
    <div>
      <ConnectWallet></ConnectWallet>
      <InputSend></InputSend>
    </div>
  )
}


function InputSend() {
  const [toValue, setToValue] = useState('')
  const [debouncedTo] = useDebounce(toValue, 500)
  const [amount, SetAmount] = useState('')
  const [debouncedAmount] = useDebounce(amount, 500)


  const onSendBtn = () => {
    transactionToken20(debouncedTo, debouncedAmount)
  }

  return (
    <>
      <div>
        <Input onChange={(e) => {
          setToValue(e.target.value)
        }}
          placeholder='Enter the address to send the transaction to'
          value={toValue}
        >
        </Input>
        <Input
          onChange={(e) => {
            SetAmount(e.target.value)
          }}
          placeholder='Amount(USDT)'
          value={amount}
        >
        </Input>
        <Button onClick={() => {
          onSendBtn()
        }}>
          send
        </Button>
      </div>

    </>
  )
}