import React, { useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useDispatch, useSelector } from 'react-redux'
import { getWalletTransaction } from '@/State/Wallet/Action';
import { getWithdrawalHistory } from '@/State/Withdrawal/Action';


const Withdrawal = () => {

  const {wallet,withdrawal} = useSelector(store=>store);
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(getWithdrawalHistory(localStorage.getItem("jwt")));
    
  },[])

  return (
     <div className='p-5 lg:p-20'>
                  <h1 className='font-bold text-3xl pb-5'>Withdrwal</h1>
                   <Table className="border-x">
                    <TableHeader >
                      <TableRow>
                        <TableHead className="text-center">Date</TableHead>
                        <TableHead className="text-center">Method</TableHead>
                        <TableHead className="text-center">Amount</TableHead>
                        <TableHead className="text-center">Status</TableHead>
        
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {withdrawal.history.map((items,index)=><TableRow key={index}>
                        
                        <TableCell>
                              <p>{items.date.toString()}</p>
                        </TableCell>
                      
            
                        <TableCell>Bank</TableCell>
                  
            
                        <TableCell >${items.amount}</TableCell>
                        <TableCell className="text-center">
                                {/* <Button variant="ghost" onClick={()=>handleRemoveToWatchlist(items.id)} size="icon" className="h-10 w-10">
                                    <BookmarkFilledIcon className='w-6 h-6' />
                                </Button> */}
                                {items.status}
                        </TableCell>
        
                      </TableRow>)}
                    </TableBody>
                  </Table>
                </div>
  )
}

export default Withdrawal
