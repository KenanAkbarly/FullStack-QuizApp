import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./loaderSlice/loaderSlice";
import usersSlice from "./usersSlice/usersSlice";

const store = configureStore({
    reducer:{
        users:usersSlice,
        loader: loaderSlice,
    }
})
export default store;