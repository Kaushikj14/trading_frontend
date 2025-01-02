import React from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

const WatchList = () => {

  const handleRemoveToWatchlist = (value)=>{

  }


  return (
    <div className='p-5 lg:p-20'>
          <h1 className='font-bold text-3xl pb-5'>WatchList</h1>
           <Table className="border-x">
            <TableHeader >
              <TableRow>
                <TableHead className="py-5">Coin</TableHead>
                <TableHead className="text-center">Symbol</TableHead>
                <TableHead className="text-center">Volume</TableHead>
                <TableHead className="text-center">Market Cap</TableHead>
                <TableHead className="text-center">24h</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right text-red-600">Remove</TableHead>

              </TableRow>
            </TableHeader>
            <TableBody>
              {[1,1,1,1,1,1,1,1,1,1].map((items,index)=><TableRow key={index}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" />
                    </Avatar>
                    <span>BitCoin</span>
                  </div>
                </TableCell>
    
                <TableCell>BTC</TableCell>
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

export default WatchList
