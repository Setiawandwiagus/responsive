import React from "react";

export const BelajarResponsive = () => {
  return (
    <div className=" w-full h-screen flex-col text-white   ">
      <div className="w-full h-1/6  flex justify-end mb-5 tablet:justify-center">
        <div className="bg-red-500 w-2/5 tablet:w-full flex justify-center items-center text-3xl">
          Merah
        </div>
      </div>
      <div className="w-full h-5/6 web:flex flex-row">
        <div className="bg-purple-600 text-3xl w-3/5  mr-5 justify-center items-center hidden web:flex">
          Ungu
        </div>
        <div className="flex flex-col w-full h-full gap-5 tablet:flex-col-reverse  ">
          <div className="bg-purple-600 w-full h-2/6 flex justify-center items-center text-3xl web:hidden">
            Ungu
          </div>

          <div className="flex flex-row h-2/6 gap-5 tablet: web:h-1/2 tablet:flex-row-reverse">
            <div className="bg-pink-500 w-1/2 flex justify-center items-center text-3xl">
              Pink
            </div>
            <div className="bg-blue-500 w-1/2 flex justify-center items-center text-3xl tablet:bg-pink-500 web:bg-blue-500">
              Biru
            </div>
          </div>
          <div className="bg-[#38EB55] h-2/6 web:h-1/2 flex justify-center items-center text-3xl">
            Hijau
          </div>
        </div>
      </div>
    </div>
  );
};
