import WalletModal from '@/components/WalletModal'
import { Button } from 'antd';
import { useEffect, useMemo, useState } from "react";
import { useAccount, useNetwork, useConnect } from 'wagmi'
import { structureId } from '@/utils/structureId'
export default function ConnectWallet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address, isDisconnected } = useAccount()
  const { chain, chains } = useNetwork()
  const [isNetError, setIsNetError] = useState(false);
  const { isLoading } = useConnect()


  useEffect(() => {
    setIsNetError(chains.some((item) => item.id === chain?.id))

    console.log(isNetError);


  }, [chain?.id])

  // const defaultValue = useMemo(() => chain?.id.toString(), [chain?.id])



  return (
    <>
      <div className="flex justify-between items-center">
        <div>

        </div>
        <div className="flex justify-center items-center">
          <Button onClick={() => setIsModalOpen(true)}>{address ? (isNetError ? structureId(address, 5) : 'Network error') : 'Connect Wallet'}</Button>
        </div>
      </div>
      <WalletModal isOpen={isModalOpen} close={() => setIsModalOpen(false)} isNetError={isNetError}></WalletModal >

    </ >
  )
}

{/* {!isDisconnected && (isNetError ? (
            <div className="text-red-500 border border-solid border-red-500 pl-3.5 pr-3.5 pt-2 pb-2 " >Network error</div>
          ) : (
            chains.map((item) =>
              item.id === chain?.id ? (
                <Button className="mr-2" key={item.id}>{item.name}</Button>
              ) : null
            )
          ))} */}
