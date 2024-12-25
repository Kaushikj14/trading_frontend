import { Button } from "@/components/ui/button";
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
// import { Sheet } from "lucide-react";
import { Sheet } from "@/components/ui/sheet";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { GripHorizontal } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-2 py-3 border-b bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
                <Button variant="ghost" size="icon" className="rounded-full h-11 w-11">
                        {/* <DragHandlerHorizontalIcon className='' /> */}
                        <GripHorizontal className='h-7 w-7' />
                </Button>
            </SheetTrigger>
          <SheetContent side="left" className="w-72 border-r-0 flex flex-col justify-center">
            <SheetHeader>
              <SheetTitle>
                  <div className="text-3xl flex justify-center items-center gap-1">
                      <Avatar >
                          <AvatarImage src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png" />
                      </Avatar>

                      <div>
                        <span className="fondt-bold text-orange-700">Cryto</span>
                        <span>Trading</span>
                      </div>
                  </div>

              </SheetTitle>
             
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
