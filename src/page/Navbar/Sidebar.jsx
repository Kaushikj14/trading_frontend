import {
  ActivityIcon,
  BookmarkIcon,
  CreditCardIcon,
  HomeIcon,
  LandmarkIcon,
  WalletIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import {
  ActivityLogIcon,
  DashboardIcon,
  DashIcon,
  ExitIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

const menu = [
  { name: "Home", path: "/", icon: <HomeIcon className="h-2 w-2" /> },
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: <DashboardIcon className="h-2 w-2" />,
  },
  {
    name: "Watchlist",
    path: "/watchlist",
    icon: <BookmarkIcon className="h-2 w-2" />,
  },
  {
    name: "Activity",
    path: "/activity",
    icon: <ActivityLogIcon className="h-2 w-2" />,
  },
  { name: "Wallet", path: "/wallet", icon: <WalletIcon className="h-2 w-2" /> },
  {
    name: "Payment Details",
    path: "/payment-details",
    icon: <LandmarkIcon className="h-2 w-2" />,
  },
  {
    name: "Withdraw",
    path: "/withdraw",
    icon: <CreditCardIcon className="h-2 w-2" />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <PersonIcon className="h-2 w-2" />,
  },
  { name: "Logout", path: "/", icon: <ExitIcon className="h-2 w-2" /> },
];
const Sidebar = () => {

  const navigate = useNavigate();

  



  return (
    <div className="mt-10 space-y-5 h-[calc(75vh-40px)] ">
      {menu.map((item) => (
        <div>
          <SheetClose className="w-full ">
            <Button
              variant="outline"
              className="flex items-center gap-5 py-6 w-full "
              onClick = {()=>navigate(item.path)}
            >
              <span className="w-8">
                {item.icon}
              </span>
              <p>{item.name}</p>
            </Button>
          </SheetClose>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
