"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import { voterUsers } from "../../constants/index.js";
import Link from "next/link.js";
const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateLogin = () => {
    // Validate required fields
    if (
      username.trim() === voterUsers.username ||
      email.trim() === voterUsers.email ||
      password.trim() === 123
    ) {
      alert("Please fill in all fields.");
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateLogin) {
      // Login is successful, handle success case here (e.g., redirect to dashboard)

      console.log("Invalid login credentials.");
    } else {
      // Login failed, display error message
      console.log("Login successful:", { username, email });
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-[100%] my-2 ">
      <form onSubmit={handleSubmit} className="mt-10 flex flex-col">
        <label htmlFor="username" className="bg-red">
          Username:
        </label>
        <input
          className="text-slate-700"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          className="text-slate-700"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          className="text-slate-700"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="py-1 px-3 bg-blue-700 my-2 rounded-lg text-white"
          type="submit"
        >
          {/* <Link href="/">Login</Link> */}
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
