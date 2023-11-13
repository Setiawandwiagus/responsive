import React, { useState } from "react";
import { useCreateUser } from "../../services/auth/register-user";

export const Register = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");

  const { mutate: regiterUser, isSuccess, error } = useCreateUser();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "username") {
        setUsername(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  console.log(Username, "Username");
  console.log(Email, "Email");
  console.log(Password, "Password");
  console.log(isSuccess, "Success");
  console.log(error, "Error");

  const registerUser = () => {
    regiterUser({
      email: Email,
      name: Username,
      password: Password,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-blue-50 h-screen">
      <div className="flex flex-col items-center space-y-3 relative">
        <h1 className="font-bold text-lg">REGISTER USER</h1>
        <input
          onChange={handleInput}
          id="username"
          className="border border-black w-[25rem] py-2 px-2 rounded"
          type="text"
          placeholder="Masukan Username"
        />
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
        <button
          className="bg-blue-500 py-3 px-10 text-white rounded-xl"
          onClick={() => {
            registerUser();
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};
