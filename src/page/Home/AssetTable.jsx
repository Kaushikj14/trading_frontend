import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

const AssetTable = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Coin</TableHead>
            <TableHead className="text-center">Symbol</TableHead>
            <TableHead className="text-center">Volume</TableHead>
            <TableHead className="text-center">MarketCap</TableHead>
            <TableHead className="text-center">24H</TableHead>
            <TableHead className="text-right">Price</TableHead>
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
  );
};

export default AssetTable;
