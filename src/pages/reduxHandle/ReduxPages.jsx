import React from "react";
import { ViewRedux } from "../../assets/components/ViewRedux";
import { ButtonRedux } from "../../assets/components/ButtonRedux";

export const ReduxPages = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col rounded-md bg-gradient-to-r from-indigo-600 to-blue-400 w-[24rem] mt-[6rem]">
        <ViewRedux />
        <ButtonRedux />
      </div>
    </div>
  );
};
