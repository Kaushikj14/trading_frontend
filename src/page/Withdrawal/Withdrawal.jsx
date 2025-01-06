import React from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

const Withdrawal = () => {
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
                      {[1,1,1,1,1,1,1,1,1,1].map((items,index)=><TableRow key={index}>
                        
                        <TableCell>
                              <p>2024/05/31</p>
                        </TableCell>
                      
            
                        <TableCell>Bank</TableCell>
                  
            
                        <TableCell >$69295</TableCell>
                        <TableCell className="text-center">
                                {/* <Button variant="ghost" onClick={()=>handleRemoveToWatchlist(items.id)} size="icon" className="h-10 w-10">
                                    <BookmarkFilledIcon className='w-6 h-6' />
                                </Button> */}
                                567
                        </TableCell>
        
                      </TableRow>)}
                    </TableBody>
                  </Table>
                </div>
  )
}

export default Withdrawal
