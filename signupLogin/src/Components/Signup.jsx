import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(user));
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSignup} className="flex flex-col gap-3 w-1/2 m-auto items-center h-screen justify-center">
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="border p-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="border p-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Signup
      </button>
    </form>
  );
};

export default Signup;
