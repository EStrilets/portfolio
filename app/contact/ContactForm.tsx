"use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";

// const formSchema = z.object({
//   username: z.string().min(2).max(20),
//   email: z.string().min(9).max(50),
//   message: z.string().min(2).max(300),
// });

// const ContactForm = () => {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//       email: "",
//     },
//   });

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const errors = validate(values);
//     if (errors && Object.keys(errors).length > 0) {
//       return setErrors(errors);
//     }
//     setErrors({});
//     setLoading(true);
//     axios
//       .post("/api/mail", {
//         name: values.name,
//         email: values.email,
//         message: values.message,
//       })
//       .then((res) => {
//         if (res.status === 200) {
//           setValues({ name: "", email: "", message: "" });
//           setLoading(false);
//           setSuccess(true);
//           setMessageState(res.data.message);
//         } else {
//           setLoading(false);
//           setMessageState(res.data.message);
//         }
//       })
//       .catch((err) => {
//         setLoading(false);
//         setMessageState(String(err.message));
//       });
//     setLoading(false);
//   };

//   return (
//     <div>
//       <form action="#" className="space-y-8">
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <label
//               htmlFor="email"
//               className="block mb-2 text-sm font-medium text-text dark:text-gray-300"
//             >
//               Name
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="shadow-sm bg-[#262F45] transition ease-in-out border border-main focus:border focus:border-[#7AA0F7] focus:bg-[#303B58]  text-text text-sm rounded-md focus:outline-none block w-full p-2.5"
//               placeholder="Jony"
//               required
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-3">
//             <label
//               htmlFor="email"
//               className="block mb-2 text-sm font-medium text-text dark:text-gray-300"
//             >
//               Last name
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="shadow-sm bg-[#262F45] border border-main focus:border focus:border-[#7AA0F7] focus:bg-[#303B58] text-text text-sm rounded-md focus:outline-none block w-full p-2.5"
//               placeholder="Ive"
//               required
//             />
//           </div>
//         </div>

//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <label
//               htmlFor="email"
//               className="block mb-2 text-sm font-medium text-text dark:text-gray-300"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="shadow-sm bg-[#262F45] border border-main focus:border focus:bg-[#303B58] focus:border-[#7AA0F7] text-text text-sm rounded-md focus:outline-none block w-full p-2.5"
//               placeholder="email@google.com"
//               required
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-3">
//             <label
//               htmlFor="email"
//               className="block mb-2 text-sm font-medium text-text dark:text-gray-300"
//             >
//               Your company
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="shadow-sm bg-[#262F45] border border-main focus:border focus:border-[#7AA0F7] focus:bg-[#303B58] text-text text-sm rounded-md focus:outline-none block w-full p-2.5"
//               placeholder="Company name"
//               required
//             />
//           </div>
//         </div>
//         <div className="sm:col-span-2">
//           <label
//             htmlFor="message"
//             className="block mb-2 text-sm font-medium text-text"
//           >
//             Message
//           </label>
//           <textarea
//             id="message"
//             rows={6}
//             className="block p-2.5 w-full text-sm text-text bg-[#262F45] rounded-md border border-main focus:border focus:border-[#7AA0F7] focus:outline-none focus:bg-[#303B58]"
//             placeholder="Leave a comment..."
//           ></textarea>
//         </div>
//         <button
//           className="bg-[#262F45] rounded-md 
//               border border-solid border-[#7AA0F7]  
//               text-[#5686f5] font-semibold text-sm leading-5 
//               py-3 px-4 
//               text-center 
//               glow-on-hover
//               w-full"
//         >
//           Send message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
import axios from "axios";
import { useState } from "react";
import { RiLoader5Fill } from "react-icons/ri";
import { validate } from "../../utils/validate";
import Input from "./Input";
import TextArea from "./TextArea";

interface IValues {
  name: string;
  email: string;
  message: string;
}
interface IErrors extends Partial<IValues> {}

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<IErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageState, setMessageState] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    setErrors({});
    setLoading(true);
    axios
      .post("/api/mail", {
        name: values.name,
        email: values.email,
        message: values.message,
      })
      .then((res) => {
        if (res.status === 200) {
          setValues({ name: "", email: "", message: "" });
          setLoading(false);
          setSuccess(true);
          setMessageState(res.data.message);
        } else {
          setLoading(false);
          setMessageState(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setMessageState(String(err.message));
      });
    setLoading(false);
  };
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={values.name}
        onChange={handleChange}
        id="name"
        name="name"
        label="Your Name"
        placeholder="John Doe"
        error={!!errors.name}
        errorMessage={!!errors.name ? errors.name : ""}
      />
      <Input
        value={values.email}
        onChange={handleChange}
        id="email"
        name="email"
        label="Your Email"
        placeholder="you@example.com"
        error={!!errors.email}
        errorMessage={!!errors.email ? errors.email : ""}
      />
      <TextArea
        value={values.message}
        onChange={handleChange}
        id="message"
        name="message"
        label="Your Message"
        placeholder="Your message here..."
        error={!!errors.message}
        errorMessage={!!errors.message ? errors.message : ""}
      />
      <button
        className="mt-4 w-full rounded-md bg-blue-600 py-3 px-5 text-lg text-white outline-none hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-opacity-60"
        type="submit"
        disabled={loading}
      >
        {loading !== true ? (
          "SUBMIT"
        ) : (
          <div className="flex h-full w-full items-center justify-center ">
            <RiLoader5Fill className="h-8 w-8 animate-spin" />
          </div>
        )}
      </button>
      <p className="mt-5 text-green-500 dark:text-green-500">
        {success !== false ? (
          messageState
        ) : (
          <span className="text-red-500 dark:text-red-500">{messageState}</span>
        )}
      </p>
    </form>
  );
};

export default ContactForm