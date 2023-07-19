import { useEffect, ReactNode } from 'react'
import { useAccount, useConnect, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi'
import { message, Modal } from 'antd';
import { CopyOutlined, LoadingOutlined } from '@ant-design/icons';



function SwitchLoading(
  props: {
    close: () => void,
  }
) {
  const { disconnect } = useDisconnect()

  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()

  useEffect(() => {
    console.log(isLoading);

  }, [isLoading])

  const onDisconnect = () => {
    disconnect()
    props.close()
  }
  const onSwitchNetwork = () => {
    switchNetwork?.(chains[0].id)
  }

  return (<>
    {
      isLoading ?
        <div className='flex justify-center items-center'><LoadingOutlined className='text-4xl' /></div> :
        <div className='flex justify-between items-center mt-6 mb-3'>
          <div onClick={() => onDisconnect()} className='border-solid border border-primaryColor pl-2 pr-2 pt-1.5 pb-1.5 rounded-md'>Disconnect</div>
          <div onClick={() => onSwitchNetwork()} className='bg-primaryColor text-white pl-2 pr-2 pt-1.5 pb-1.5 rounded-md'>Switch network</div>
        </div>

    }
  </>);
}




function WalletModal(
  props: {
    isOpen: boolean
    // children: ({ isLoading }: { isLoading?: boolean }) => ReactNode
    close: () => void,
    isNetError: boolean
  }
) {
  const [messageApi, contextHolder] = message.useMessage();


  const { address, isConnecting, isDisconnected } = useAccount()
  const { connect, connectors, isLoading, pendingConnector } =
    useConnect({
      onError(error) {
        messageApi.open({
          type: 'error',
          content: error.toString(),
        });
      },
    })
  const { disconnect } = useDisconnect()




  const linkWallet = (connector: any) => {
    console.log(connector);

    connect({ connector })
    props.close()
  }

  const onDisconnect = () => {
    disconnect()
    props.close()
  }


  return (
    <>
      {contextHolder}
      <Modal footer={null} centered open={props.isOpen} onCancel={() => props.close()}>
        <div>
          {
            address ? (
              props.isNetError ?
                (<div className=' flex flex-col'>
                  <h1 className='font-bold text-lg'>
                    Account
                  </h1>
                  <h1 className='text-base pt-1 pb-1 m-0'>
                    Connected with MetaMask
                  </h1>
                  <p className='text-center mt-5 mb-5'>{address}</p>
                  <div className='flex sm:justify-between md:justify-around'>
                    <div className='flex justify-start items-center hover:bg-bgHover pl-2 pr-2 pt-1 pb-1 rounded-md cursor-pointer'>
                      <CopyOutlined />
                      <p className='ml-2'>Copy your Address</p>
                    </div>
                    <div className='flex justify-start items-center  hover:bg-bgHover pl-2 pr-2 pt-1 pb-1 rounded-md cursor-pointer'>
                      <CopyOutlined />
                      <p className='ml-2'>View in browser </p>
                    </div>
                  </div>
                  <div className='flex justify-center items-center cursor-pointer'>

                    <div className='text-primaryColor border-primaryColor border border-solid pl-6 pr-6 pt-1 pb-1 rounded-sm mt-4' onClick={() => onDisconnect()}><p className='m-0'>Logout</p></div>
                  </div>
                </div>) : <div>
                  <h1 className='text-center text-base mt-5'>Your wallet is not on the chosen network</h1>
                  <SwitchLoading close={props.close}></SwitchLoading>
                </div>
            ) : (
              <div className='flex flex-col'>
                <h1 className='font-bold text-lg'>
                  Connect Wallet
                </h1>
                <p className='text-base  text-primaryTextColor1'>
                  Connect wallet in one click to start using BSC
                </p>
                <div className='flex justify-start items-center flex-wrap sm:flex-col sm:items-start md:flex-row' >
                  {
                    connectors.map((connector) =>
                      <div
                        className='sm:text-left pl-3 pr-3 pt-2 pb-2  bg-bgWallet border-transparent cursor-pointer border rounded-md border-solid sm:w-full md:w-52  mt-2 mb-2 lg:ml-3 lg:mr-3 hover:border-primaryColor'
                        key={connector.id}
                        onClick={
                          () => linkWallet(connector)
                        }
                      >
                        <p>{connector.name}<span> {!connector.ready && ' (unsupported)'}</span> </p>
                      </div>
                    )
                  }
                </div>
              </div>
            )

          }

        </div>
      </Modal></>

  )
}

export default WalletModal