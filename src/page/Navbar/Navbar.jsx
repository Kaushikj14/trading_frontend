// import { Button } from "@/components/ui/button";
// import {
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Sheet } from "@/components/ui/sheet";
// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
// import { GripHorizontal } from "lucide-react";
// import React from "react";
// import Sidebar from "./Sidebar";
// import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
// import { useSelector } from "react-redux";

// const Navbar = () => {

//   const {auth} = useSelector(store=>store);


//   return (
//     // <div className="px-2 py-3 border-b bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
//     <div className="px-2 py-2 border-b bg-background sticky top-0 left-0 right-0 flex justify-between items-center z-50  shadow-md">
//       <div className="flex items-center gap-3">
//         <Sheet>
//           <SheetTrigger>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="rounded-full h-11 w-11"
//             >
//               {/* <DragHandlerHorizontalIcon className='' /> */}
//               <GripHorizontal className="h-7 w-7" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent
//             side="left"
//             className="w-72 border-r-0 flex flex-col justify-center"
//           >
//             <SheetHeader>
//               <SheetTitle>
//                 <div className="text-3xl flex justify-center items-center gap-1">
//                   <Avatar>
//                     <AvatarImage src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png" />
//                   </Avatar>

//                   <div>
//                     <span className="fondt-bold text-orange-700">Cryto</span>
//                     <span>Trading</span>
//                   </div>
//                 </div>
//               </SheetTitle>
//             </SheetHeader>

//               <Sidebar />
            
//           </SheetContent>
//         </Sheet>

//         <p className="text-sm lg:text-base cursor-pointer">
//           Crypto Trading
//         </p>

//         <div className="p-0 ml-9">
//           <Button variant="outline" className="flex items-center gap-3">
//             <MagnifyingGlassIcon />
//             <span>  Search </span>  
//           </Button>
//         </div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       <div>
//         <Avatar >
//             <AvatarFallback>{auth.user?.fullName[0].toUpperCase()}</AvatarFallback>
//         </Avatar>
//       </div>

//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { GripHorizontal } from "lucide-react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { auth } = useSelector((store) => store);

  return (
    <div className="px-2 py-2 border-b bg-background sticky top-0 left-0 right-0 flex justify-between items-center z-50 shadow-md">
      {/* Left Section: Sidebar Toggle and Title */}
      <div className="flex items-center gap-3">
        {/* Sidebar Sheet */}
        <Sheet>
          <SheetTrigger>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-11 w-11"
            >
              <GripHorizontal className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-72 border-r-0 flex flex-col justify-center"
          >
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-1">
                  <Avatar>
                    <AvatarImage src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png" />
                  </Avatar>
                  <div>
                    <span className="font-bold text-orange-700">Crypto</span>
                    <span>Trading</span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <Sidebar />
          </SheetContent>
        </Sheet>

        {/* Title */}
        <p className="text-sm lg:text-base cursor-pointer">Crypto Trading</p>

        {/* Search Button */}
        <div className="p-0 ml-9">
          <Button variant="outline" className="flex items-center gap-3">
            <MagnifyingGlassIcon />
            <span>Search</span>
          </Button>
        </div>
      </div>

      {/* Right Section: User Avatar */}
      <div>
        <Avatar>
          {auth.user?.fullName ? (
            <AvatarFallback>
              {auth.user.fullName[0].toUpperCase()}
            </AvatarFallback>
          ) : (
            <AvatarFallback>?</AvatarFallback>
          )}
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
