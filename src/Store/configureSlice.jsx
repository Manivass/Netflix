import { createSlice } from "@reduxjs/toolkit";

const configureStore = createSlice(
    {
        name : "configure" ,
        initialState : {
            userLanguage : "en" ,
        },
        reducers : {
            changeLanguage : (state , action) => {
                state.userLanguage = action.payload ;
            },
        }
    }
);

export const {changeLanguage} = configureStore.actions
export default configureStore.reducer ;