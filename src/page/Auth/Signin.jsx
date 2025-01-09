import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { login } from "@/State/Auth/Action";
import { useNavigate } from "react-router-dom";

const Signin = () => {

  const dispatch = useDispatch();
  const navigate  = useNavigate();

  const form = useForm({
    resolve: "",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(login({data,navigate}));
    console.log(data);
  };

  return (
    <div >
        <h1 className="text-xl font-bold text-center pb-5">Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    //   name="ifsc"
                    className="border w-full border-gray-700 p-5"
                    placeholder="demo@gmail.com"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    //   name="ifsc"
                    className="border w-full border-gray-700 p-5"
                    placeholder="********"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          

         
            <Button className="w-full py-5">Submit</Button>

        </form>
      </Form>
    </div>
  );
};

export default Signin;
