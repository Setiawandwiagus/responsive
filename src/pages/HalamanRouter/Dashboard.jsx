import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetDataUser } from "../../services/auth/get_user";
import { CookieKeys, CookieStorage } from "../../utils/cookies";

export const Dashboard = () => {
  const data = useLocation();

  const [Token, setToken] = useState(localStorage.getItem("token"));

  const { data: paijoSalto } = useGetDataUser({});

  console.log(paijoSalto, "paijoSalto");

  useEffect(() => {
    const data = localStorage.getItem("token");
    setToken(data);
  }, []);

  const handleLogout = () => {
    CookieStorage.remove(CookieKeys.AuthToken);
    window.location.href = "/Login";
  };

  return (
    <div className="flex flex-col justify-center items-center bg-blue-50 h-screen">
      <div className="flex flex-col items-center space-y-3 relative">
        <h1 className="font-bold text-lg">Dashboard</h1>
        <br />
        <button
          onClick={() => handleLogout()}
          className="bg-red-500 py-3 px-10 text-white rounded-xl"
        >
          LogOut
        </button>
      </div>
    </div>
  );
};
