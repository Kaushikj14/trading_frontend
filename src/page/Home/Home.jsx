import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {  DotIcon, MessageCircle } from "lucide-react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input"
import { getCoinList, getTop50CoinList, } from "@/State/Coin/Action";
import { useDispatch, useSelector } from "react-redux";
// import { store } from "@/State/Store";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"




const Home = () => {
  const [category, setCategory] = React.useState("all");
  const [inputValue,setInputValue] = React.useState(" ");
  const [isBotRealse,setIsBotRelease] = React.useState(false);
  const {coin} = useSelector(store => store);
 
  
  const dispatch = useDispatch();

  
  const handleBotRelease = ()=>{
    setIsBotRelease(!isBotRealse)};

  const handleCategory = (value) => {
    setCategory(value);
  };

  const handleChange  = (e) =>{
    setInputValue(e.target.value)
  }

  const handleKeyPress = (event) =>{
        if(event.key=="Enter"){
            console.log(inputValue);
        }
        setInputValue("")
  }


  useEffect(()=>{
    dispatch(getTop50CoinList())
  },[category]);

  useEffect(()=>{
    dispatch(getCoinList(1))
  },[]);


  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              variant={category == "all" ? "default" : "outline"}
              className="rounded-full"
            >
              {" "}
              All
            </Button>

            <Button
              onClick={() => handleCategory("top50")}
              variant={category == "top50" ? "default" : "outline"}
              className="rounded-full"
            >
              {" "}
              Top 50
            </Button>

            <Button
              onClick={() => handleCategory("topGainer")}
              variant={category == "topGainer" ? "default" : "outline"}
              className="rounded-full"
            >
              {" "}
              Top Gainers
            </Button>

            <Button
              onClick={() => handleCategory("topLosers")}
              variant={category == "topLosers" ? "default" : "outline"}
              className="rounded-full"
            >
              {" "}
              Top Losers
            </Button>
          </div>
          <AssetTable coin={category=="all"?coin.coinList:coin.top50} category={category} />
          <div>
        <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

        </div>
        </div>



        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart coinId={"bitcoin"} />
          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage
                  className="h-18 w-12"
                  src={
                    "https://cdn.pixabay.com/photo/2021/12/03/10/32/ethereum-6842405_640.png"
                  }
                />
              </Avatar>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <p>ETH</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">Ethereum</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">5464</p>
                <p className="text-red-600">
                  <span>-13.2673572</span>
                  <span>(-0.2257%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">
        {/* div for opening chat  */}
        {isBotRealse && <div className="rounded-md w-[20rem] md:w-[25rem] lg:[25rem] h-[70vh] bg-slate-900">
          <div className="flex justify-between items-center border-b px-6 h-[12%]">
            <p>ChatBot</p>
            <Button onClick = {handleBotRelease} variant="ghost" size="icon">
              <Cross1Icon />
            </Button>
          </div>

          <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
            <div className="self-start pb-5 w-auto">
              <div className="justify-start self-start px-5 py-2 rounded-md bg-slate-800 w-auto text-left">
                <p>Hi, Babu Bhaiya</p>
                <p>You can ask any crypto-related question</p>
                <p>like price, market cap, etc...</p>
              </div>
            </div>

            {[1, 1, 1, 1, 1].map((item, index) => (
              <div
                key={index}
                className={`${
                  index % 2 == 0 ? "self-end" : "self-start"
                } pb-5 w-auto`}
              >
                {item % 2 == 0 ? (
                  <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto text-right">
                    <p>prompt Who are you</p>
                  </div>
                ) : (
                  <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto text-right">
                    <p>ans Hi, Babu Bhaiya</p>
                  </div>
                )}
              </div>
            ))}

          </div>

            <div className="h-[12%] border-t">
                    <Input className="w-full h-full order-none outline-none" placeholder="write prompt" onChange={handleChange} value={inputValue} onKeyPress={handleKeyPress}/>
            </div>

        </div>}

        <div className="relative w-[10rem] cursor-pointer group">
          <Button 
          onClick = {handleBotRelease}
          className="w-full h-[3rem] gap-2 items-center">
            <MessageCircle
              size={30}
              className="fill-[#1e293b] -rotate-90 stroke-none group-hover:fill:[#1a1a1a]"
            />
            <span className="text-2xl">Chat Bot</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
