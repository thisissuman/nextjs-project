"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const LoginPage = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onLogin = () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <div className="w-full max-w-xs border rounded-lg p-5">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 mt-4">Email</label>
        <input
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 mt-4">Password</label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">Login here</button>
        <Link href="/signup" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-4 ml-10">Sign Up ?</Link>
      </div>
    </div>
  );
};

export default LoginPage;
