import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getUserAssets } from '@/State/Asset/Action'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Portfolio = () => {

  const {asset} = useSelector(store=>store)
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getUserAssets(localStorage.getItem("jwt")));
    },[])

  return (
    <div className='p-5 lg:p-20'>
      <h1 className='font-bold text-3xl pb-5'>Portfolio</h1>
       <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Asset</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Unit</TableHead>
            <TableHead className="text-center">Change</TableHead>
            <TableHead className="text-center">Change(%)</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {asset.userAssets?.map((items,index)=><TableRow key={index}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={items.coin.image} />
                </Avatar>
                <span>{items.coin.name}</span>
              </div>
            </TableCell>

            <TableCell>{items.coin.symbol.toUpperCase()}</TableCell>
            <TableCell>{items.quantity}</TableCell>
            <TableCell>{items.coin.price_change_24h}</TableCell>
            <TableCell>{items.coin.price_change_percentage_24h}</TableCell>

            <TableCell className="text-right">${items.coin.total_volume}</TableCell>
          </TableRow>)}
        </TableBody>
      </Table>
    </div>
  )
}

export default Portfolio
