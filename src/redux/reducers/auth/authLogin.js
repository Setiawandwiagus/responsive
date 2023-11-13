import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    token : "",
    isLogin : "",
    user: "",
}

const authLoginSclice = createSlice ({
    name : "LoginAuth",
    initialState,
    reducers : {
        
    }
})