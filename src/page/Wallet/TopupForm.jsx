import { Input } from "@/components/ui/input";
import React from "react";
// import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const TopupForm = () => {
  const [amount, setAmount] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("STRIPE");

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleSubmit = () => {
    console.log(amount, paymentMethod);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setAmount(e.target.value);
  };

  return (
    <div className="pt-10 space-y-5 ">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          onChange={handleChange} // Corrected here
          value={amount}
          className="py-7 text-lg"
          placeholder="$9999"
        />
      </div>

      <div>
        <h1 className="pb-2">Select Payment Method</h1>
        <RadioGroup
          onValueChange={(value) => {
            handlePaymentMethodChange(value);
          }}
          className="flex"
          defaultValue="STRIPE"
        >
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-9 w-9 "
              value="STRIPE"
              id="r1"
            />
            <Label htmlFor="r1">
              <div className=" rounded-md px-5 py-2 w-32 ">
                <img
                  className="h-9 w-full"
                  src="https://easydigitaldownloads.com/wp-content/uploads/edd/2019/03/stripe-product-image.png"
                  alt=""
                  srcset=""
                />
              </div>
            </Label>
          </div>

          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-9 w-9 "
              value="RAZORPAY"
              id="r2"
            />
            <Label htmlFor="r2">
              <div className=" rounded-md px-5 py-2 w-32 ">
                <img
                  className="h-9 w-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnA99TABOEvVDdjInRpcHjvKZIhgCnv0z9zg&s"
                  alt=""
                  srcset=""
                />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>

      <Button onClick={handleSubmit} className="w-full py-7">
        Submit
      </Button>
    </div>
  );
};

export default TopupForm;
