import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { DialogHeader } from "@/components/ui/dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ReloadIcon, ShuffleIcon } from "@radix-ui/react-icons";
import { CopyIcon, DollarSign, UploadIcon, WalletIcon } from "lucide-react";
import React from "react";
import WihdrawalForm from "./WihdrawalForm";
import TransferForm from "./TransferForm";
import TopupForm from "./TopupForm";

const Wallet = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <WalletIcon size={30} />
                <div>
                  <CardTitle className="text-2xl">My Wallet</CardTitle>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-200 text-sm">#A412378</p>
                    <CopyIcon size={12} className="cursor-pointer hover:text-slate-300" />
                  </div>
                </div>
              </div>

              <div>
                <ReloadIcon className="w-6 h-6 cursor-pointer hover:text-gray-400"></ReloadIcon>
              </div>


            </div>
          </CardHeader>

          <CardContent>
            <div className="flex items-center">
              <DollarSign />
              <span className="text-2xl font-semibold">
                20000
              </span>
            </div>

            <div className="flex gap-7 mt-5">
                {/* dialog box -1 */}
                <Dialog>
                    <DialogTrigger>
                      <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">
                          <UploadIcon />
                          <span className="text-sm mt-2">Add Money</span>
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Top Up Your Wallet</DialogTitle>
                          </DialogHeader>
                          <TopupForm />
                    </DialogContent>
                </Dialog>

                {/* dialog box 2 */}
                <Dialog>
                    <DialogTrigger>
                      <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">
                          <UploadIcon />
                          <span className="text-sm mt-2">Withdrawal</span>
                          
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Request Wihdrawal</DialogTitle>
                          </DialogHeader>
                          <WihdrawalForm />
                    </DialogContent>
                </Dialog>


                 {/* dialog box 3 */}
                 <Dialog>
                    <DialogTrigger>
                      <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">
                          <ShuffleIcon />
                          <span className="text-sm mt-2">Transfer</span>
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="tetx-center text-xl">Transfer to other wallet</DialogTitle>
                          </DialogHeader>
                          <TransferForm />
                    </DialogContent>
                </Dialog>
            </div>
          
          
          
          </CardContent>


        </Card>
      </div>
    </div>
  );
};

export default Wallet;
