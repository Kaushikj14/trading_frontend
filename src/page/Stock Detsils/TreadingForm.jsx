import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getAssetDetails } from '@/State/Asset/Action'
import { payOrder } from '@/State/Order/Action'
import { getUserWallet } from '@/State/Wallet/Action'
import { DotIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TreadingForm = () => {

    const [orderType,setOrderType]=React.useState("BUY");

    const [amount,setAmount] = useState(0);
    const [quantity,setQuantity] = useState(0);
    const {coin,wallet,asset} = useSelector(store=>store);
    const dispatch = useDispatch();

    const handleChange = (e)=>{

      console.log("-----------data",wallet.userWallet);
      

        const amount = e.target.value;
        setAmount(amount);
        const volume = calculateBuyCost(amount,coin.coinDetails.market_data.current_price.usd);
        setQuantity(volume);
    };

    const calculateBuyCost=(amount,price)=>{

      let volume = amount/price;

      let decimalPlace = Math.max(2,price.toString().split(".")[0].length)

      return volume.toFixed(decimalPlace);
    }


    useEffect(()=>{
            dispatch(getUserWallet(localStorage.getItem("jwt")));
            dispatch(getAssetDetails({coinId:coin.coinDetails.id,jwt:localStorage.getItem("jwt")}))
        
    },[]);


    const handleBuyCrypto = ()=>{
      dispatch(payOrder({jwt:localStorage.getItem("jwt"),amount,orderData:{coinId:coin.coinDetails?.id,quantity,orderType}}))
    }

  return (
    <div className='space-y-10 p-5'>
        <div>
            <div className="flex gap-4 items-center justify-between">
                <Input
                className="py-7 focus:outline-none"
                placeholder  = "Enter Amount ...."
                onChange = {handleChange}
                type="number"
                name = "amount"
                />


                <div>
                    <p className='border text-2xl flex justify-center items-center w-36 h-14 rounded-md'>{quantity}</p>
                </div>
            </div>

               {false && <h1 className='text-red-500 text-center pt-4'>Insufficient wallet balance to buy</h1>}

        </div>

         <div className="flex gap-5 items-center">
                  <div>
                    <Avatar>
                      <AvatarImage
                        src={
                          "https://banner2.cleanpng.com/20240304/cfk/transparent-blue-circle-ether-cryptocurrency-logo-in-blue-1710851707211.webp"
                        }
                      />
                    </Avatar>
                  </div>
        
                  <div>
                    <div className="flex items-center gap-2">
                      <p>BTC</p>
                      <DotIcon className="text-gray-400" />
                      <p className="text-gray-400">Bitcoin</p>
                    </div>
        
                    <div className="flex items-end gap-2">
                      <p className="text-xl font-bold">${coin.coinDetails?.market_data.current_price.usd}</p>
                      <p className="text-red-600">
                        <span>-13124688465.578</span>
                        <span>(-0.29803%)</span>
                      </p>
                    </div>
                  </div>
         </div>

         <div className="flex items-center justify-between">
            <p>Order Type</p>
            <p>Market Order</p>
         </div>

         <div className='flex items-center justify-between'>
                        <p>{orderType=="BUY"?"Available Case":"Available Quantity"}</p>
                        <p>{orderType=="BUY"? wallet.userWallet?.balance : (asset.assetDetails?.quantity || 0)}</p>

         </div>

         <div>
            <Button
              onClick = {handleBuyCrypto}
            className={`w-full py-6 ${orderType=="SELL"?"bg-red-600 text-white":""}`}>
                {orderType}
            </Button>

            <Button variant = "links" className="w-full mt-5 text-xl" onClick = {()=>{setOrderType(orderType=="BUY"?"SELL":"BUY")}}>
                {orderType=="BUY"?"Or Sell":"Or Buy"}
            </Button>
         </div>
    </div>
  )
}

export default TreadingForm
