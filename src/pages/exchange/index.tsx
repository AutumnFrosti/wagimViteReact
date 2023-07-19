import ConnectWallet from "@/components/ConnectWallet"
import { SendTransaction } from "@/components/senddemo"
export default function Exchange() {


  return (
    <div>
      <ConnectWallet></ConnectWallet>
      <SendTransaction></SendTransaction>
    </div>
  )
}

