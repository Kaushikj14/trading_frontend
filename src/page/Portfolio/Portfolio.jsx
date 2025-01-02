import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const Portfolio = () => {
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

            <TableCell className="text-right">$69295</TableCell>
          </TableRow>)}
        </TableBody>
      </Table>
    </div>
  )
}

export default Portfolio
