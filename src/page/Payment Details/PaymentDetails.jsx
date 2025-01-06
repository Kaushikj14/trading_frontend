import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import PaymentDetailsForm from "./PaymentDetailsForm";

const PaymentDetails = () => {
  return (
    <div className="px-20">
      <h1 className="text-3xl font-bold py-10">Payment Details</h1>
    {false?  <Card>
        <CardHeader className="text-left">
          <CardTitle>Yes Bank</CardTitle>
          <CardDescription>A/C Number : ********8833</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-left">
            <p className="w-32">Account Holder</p>
            <p className="text-gray-400"> : Demo</p>
          </div>

          <div className="flex items-center text-left">
            <p className="w-32">IFSC</p>
            <p className="text-gray-400">: YES0000008</p>
          </div>
        </CardContent>
      </Card>: <Dialog>
        <DialogTrigger>
          <Button className="py-6">Add Payment Details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
           
          </DialogHeader>
          <PaymentDetailsForm />
        </DialogContent>
      </Dialog>}
     
    </div>
  );
};

export default PaymentDetails;
