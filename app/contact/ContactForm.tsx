"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(20),
  email: z.string().min(9).max(50),
  message: z.string().min(2).max(300),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <form action="#" className="space-y-8">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-text dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-[#262F45] border border-[#7AA0F7] text-text text-sm rounded-md focus:outline-none focus:border-[#6df178] block w-full p-2.5"
            placeholder="Jony"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-text dark:text-gray-300"
          >
            Last name
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-[#262F45] border border-[#7AA0F7] text-text text-sm rounded-md focus:outline-none focus:border-[#6df178] block w-full p-2.5"
            placeholder="Ive"
            required
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-text dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-[#262F45] border border-[#7AA0F7] text-text text-sm rounded-md focus:outline-none focus:border-[#6df178] block w-full p-2.5"
            placeholder="email@google.com"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-text dark:text-gray-300"
          >
            Your company
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-[#262F45] border border-[#7AA0F7] text-text text-sm rounded-md focus:outline-none focus:border-[#6df178] block w-full p-2.5"
            placeholder="Company name"
            required
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-text"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          className="block p-2.5 w-full text-sm text-text bg-[#262F45] rounded-md border border-[#7AA0F7] focus:border-[#6df178] focus:outline-none"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <button
        className="bg-[#262F45] rounded-md 
              border border-solid border-[#7AA0F7]  
              text-[#5686f5] font-semibold text-sm leading-5 
              py-3 px-4 
              text-center 
              glow-on-hover
              w-full"
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
