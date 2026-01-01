import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice" ;
import GPT from "./toggleGPTSlice" ;
import configSlice from "./configureSlice";
const store = configureStore({
    reducer:{
        user : userSlice ,
        movies : moviesSlice ,
        GPTSearch : GPT ,
        userInfo : configSlice ,
    }
})
export default store ;