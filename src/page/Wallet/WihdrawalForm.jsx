import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

const WihdrawalForm = () => {
  const [amount, setAmount] = React.useState("");

  const handleSubmit = (e) => {};

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="pt-10  space-y-5">
      <div className="flex justify-between items-center rounded-md bg-slate-800 text-xl font-bold px-5 py-4">
        <p>Available Balance</p>
        <p>$87989</p>
      </div>
      <div className="flex flex-col items-center">
        <h1>Enter Withdrawal amount</h1>
        <div className="flex items-center justify-center">
          <Input
            onChange={handleChange}
            value={amount}
            className="WithdrwalInput py-7 border-none outline-none focus:outline-none px-0 text2xl text-center"
            placeholder="$9999"
            type="number"
          />
        </div>
      </div>

      <div>
        <p className="pb-2">Transfer to</p>
        <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
          <img
            className="h-12 w-12"
            src="https://happay.com/blog/wp-content/uploads/sites/12/2022/09/baas-banking-as-a-service-.png"
            alt=""
          />
          <div>
            <p className="text-xl font-bold"> Yes Bank</p>
            <p className="text-xs">*******8833</p>
          </div>
        </div>
      </div>
      <DialogClose className="w-full">
        <Button className="w-full py-7 text-xl" onClick={handleSubmit}>
          Withdraw
        </Button>
      </DialogClose>
    </div>
  );
};

export default WihdrawalForm;
