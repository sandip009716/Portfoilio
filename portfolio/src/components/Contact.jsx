import React from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import toast  from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo = {
      name:data.name,
      email:data.email,
      message:data.message
    }
    try {
      await axios.post("https://getform.io/f/akkpgjja", userInfo);
      toast.success("Your message has been sent");
      reset();
    } catch(error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <hr className="border-t-1 border-gray-200 mt-12" />
      <div
        id="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form onSubmit={handleSubmit(onSubmit)}
           // action="https://getform.io/f/akkpgjja"
           // method="POST"
            className="bg-slate-200 w-96 py-6 px-17 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="text-gray-700">FullName</label>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter Your FullName"
                {...register("name", { required: true })}
              ></input>
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-gray-700">Email Address</label>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter Your Email Address"
                {...register("email", { required: true })}
              ></input>
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-gray-700">Message</label>
              <textarea
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus-outline"
                id="text"
                type="text"
                name="textArea"
                placeholder="Enter Your Qurey"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
