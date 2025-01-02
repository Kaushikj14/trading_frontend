import React from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

const Activity = () => {
  return (
    <div className='p-5 lg:p-20'>
              <h1 className='font-bold text-3xl pb-5'>Activity</h1>
               <Table className="border-x">
                <TableHeader >
                  <TableRow>
                    <TableHead className="text-center">Date & Time</TableHead>
                    <TableHead className="text-left">Trending Pair</TableHead>
                    <TableHead className="text-center">Buy Price</TableHead>
                    <TableHead className="text-center">Selling Price</TableHead>
                    <TableHead className="text-center">Order Type</TableHead>
                    <TableHead className="text-center">Profite Loss</TableHead>
                    <TableHead className="text-right">/Value</TableHead>
    
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1,1,1,1,1,1,1,1,1,1].map((items,index)=><TableRow key={index}>
                    
                    <TableCell>
                          <p>2024/05/31</p>
                          <p className='text-gray-400'>12:39:32</p>
                    </TableCell>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" />
                        </Avatar>
                        <span>BitCoin</span>
                      </div>
                    </TableCell>
        
                    <TableCell>98762543</TableCell>
                    <TableCell>1276376872</TableCell>
                    <TableCell>-0.2009</TableCell>
        
                    <TableCell >$69295</TableCell>
                    <TableCell className="text-right">
                            <Button variant="ghost" onClick={()=>handleRemoveToWatchlist(items.id)} size="icon" className="h-10 w-10">
                                <BookmarkFilledIcon className='w-6 h-6' />
                            </Button>
    
                    </TableCell>
    
                  </TableRow>)}
                </TableBody>
              </Table>
            </div>
  )
}

export default Activity
