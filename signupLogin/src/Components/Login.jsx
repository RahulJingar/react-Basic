import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (
      storedUser &&
      credentials.email === storedUser.email &&
      credentials.password === storedUser.password
    ) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-3 w-1/2 m-auto items-center h-screen justify-center"
    >
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
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Login
      </button>
    </form>
  );
};

export default Login;
