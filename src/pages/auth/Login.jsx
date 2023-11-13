import React, { useState } from "react";
import { useLoginUser } from "../../services/auth/login-user";

export const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const { mutate: loginUser, isSuccess, error, data } = useLoginUser();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  if (isSuccess && data) {
    localStorage.setItem("token", data.data.data.token);
    localStorage.setItem("Agus", "salto");
    sessionStorage.setItem("token", data.data.data.token);
  }
  if (error) {
    console.log(error.response.data.message, "Ini Error");
  }

  const login = () => {
    loginUser({
      email: Email,
      password: Password,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-blue-50 h-screen">
      <div className="flex flex-col items-center space-y-3 relative">
        <h1 className="font-bold text-lg">LOGIN USER</h1>
        <input
          onChange={handleInput}
          id="email"
          className="border border-black w-[25rem] py-2 px-2 rounded"
          type="text"
          placeholder="Masukan Email"
        />
        <input
          onChange={handleInput}
          id="password"
          className="border border-black w-[25rem] py-2 px-2 rounded"
          type="password"
          placeholder="Masukan Password"
        />
        <br />
        <button
          className="bg-blue-500 py-3 px-10 text-white rounded-xl"
          onClick={() => login()}
        >
          Login
        </button>
      </div>
    </div>
  );
};
