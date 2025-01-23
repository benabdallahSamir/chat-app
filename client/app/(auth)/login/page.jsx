"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { login as auth } from "../../../api/auth.js";
import Link from "next/link";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";


function Page() {
  async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const response = await auth(username, password);
    if (!response) toast.error("something went wrong");
    else if (response.status !== 200) toast.error(response.message);
    else {
      toast.success("Welcome back");
      redirect("/");
    }
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={login}
            >
              Login
            </button>
          </div>
        </form>
        <p className="font-semibold text-center capitalize">or</p>
        <div className="flex items-center justify-between ">
          <button
            className="flex items-center border border-gray-500 hover:border-blue-700 duration-300 hover:bg-blue-100 rounded-xl text-l py-2 px-4 mx-auto focus:outline-none focus:shadow-outline"
            type="button"
          >
            <FcGoogle size={30} className="mr-3" />
            Login with Google
          </button>
          <button
            className="flex items-center border border-gray-500 hover:border-blue-700 duration-300 hover:bg-blue-100 rounded-xl text-l py-2 px-4 mx-auto focus:outline-none focus:shadow-outline"
            type="button"
          >
            <FaGithub size={30} className="mr-3" />
            Login with Github
          </button>
        </div>
        <p className="text-center mt-3 font-semibold text-l">
          You already have an account ?{" "}
          <Link
            href={"/signup"}
            className="cursor-pointer duration-300 hover:font-semibold font-normal"
          >
            welcome back
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page;
