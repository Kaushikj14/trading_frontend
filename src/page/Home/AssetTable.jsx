import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCoinList } from "@/State/Coin/Action";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AssetTable = ({coin,category}) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();


 

  return (
      <div>
          <Table>
        <ScrollArea className={`${category = "all"?"h-[74vh]":"h-[82vh]"}`}>
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
          {coin.map ((items,index)=> <TableRow key={items.id}>
            <TableCell onClick={()=>navigate(`/market/${items.id}`)} className="font-medium cursor-pointer">
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={items.image} />
                </Avatar>
                <span>{items.name}</span>
              </div>
            </TableCell>

            <TableCell>{items.symbol}</TableCell>
            <TableCell>{items.total_volume}</TableCell>
            <TableCell>{items.market_cap}</TableCell>
            <TableCell>{items.price_change_percentage_24h}</TableCell>

            <TableCell className="text-right">${items.current_price}</TableCell>
          </TableRow>
        )}
        </TableBody>
        </ScrollArea>
        
      </Table>
      </div>
      
   
  );
};

export default AssetTable;
