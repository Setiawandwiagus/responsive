import { configureStore } from "@reduxjs/toolkit";
import manipulasiBedak from "../action/manipulasiBedak";

export default configureStore({
  reducer: {
    kotakMakeUp: manipulasiBedak,
  },
});
