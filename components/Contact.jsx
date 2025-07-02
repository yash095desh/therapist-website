"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Info, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Phone is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Please tell us what brings you here"),
  preferredTime: z.string().min(2, "Preferred time required"),
  consent: z.boolean().refine((val) => val, {
    message: "You must agree to be contacted.",
  }),
});

const ContactSection = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      preferredTime: "",
      consent: false,
    },
  });

  const onSubmit = (values) => {
    console.log("Form Data:", values);
  };

  return (
    <section id="contact" className="bg-white py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT: Office Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-800">Get In Touch</h2>
          <p className="text-gray-600 text-lg">
            Simply fill out the brief fields and Dr. Serena Blake will be in touch within one business day. This form is private and free.
          </p>

          <div className="text-gray-700 space-y-4">
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2"> <MapPin className=" size-4"/> Location</h3>
              <p>1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2"> <Clock className=" size-4"/> Office Hours</h3>
              <p>
                In-person: Tue & Thu, 10 AM – 6 PM<br />
                Virtual (Zoom): Mon, Wed & Fri, 1 PM – 5 PM
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2"><Phone className=" size-4"/> Contact</h3>
              <p>Phone: (323) 555-0192<br />Email: <a href="mailto:serena@blakepsychology.com" className="underline text-blue-600">serena@blakepsychology.com</a></p>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="bg-slate-100 p-6 rounded-lg shadow-lg space-y-6 border"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What brings you here?</FormLabel>
                  <FormControl><Textarea rows={4} {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred time to reach you</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    I agree to be contacted
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-slate-700 hover:bg-slate-800">
              Submit
            </Button>
            <p className="text-xs text-gray-500 mt-2 flex items-start gap-2">
             <Info className=" size-5 "/> By submitting, you confirm you are 18+ and agree to our Privacy Policy & TOS and to receive emails & texts from Dr. Serena Blake.
            </p>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactSection;
