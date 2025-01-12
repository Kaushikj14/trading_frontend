import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import React from "react";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { transferMoney } from "@/State/Wallet/Action";


const TransferForm = () => {

  const dispatch = useDispatch();
  const {wallet} = useSelector((state) => state.wallet);



  const [formData, setformData] = React.useState({
    amount: "",
    walletId: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = () => {
    dispatch(transferMoney(
      {
        jwt:localStorage.getItem("jwt"),
        walletId:formData.walletId,
        reqData:{
          amount:formData.amount,
          purpose:formData.purpose
        }
      }
    )
  )
    console.log(formData);
  };

  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          name="amount"
          onChange={handleChange}
          value={formData.amount}
          className="py-7"
          placeholder="$9999"
        />
      </div>

      <div>
        <h1 className="pb-1">Enter Wallet Id</h1>
        <Input
          name="walletId"
          onChange={handleChange}
          value={formData.walletId}
          className="py-7"
          placeholder="#ADZK"
        />
      </div>

      <div>
        <h1 className="pb-1">Enter Purpose</h1>
        <Input
          name="purpose"
          onChange={handleChange}
          value={formData.purpose}
          className="py-7"
          placeholder="gift for your frinend"
        />
      </div>

      <DialogClose>
        <Button className="w-full py-7" onClick={handleSubmit}>
          Submit
        </Button>
      </DialogClose>
    </div>
  );
};

export default TransferForm;
