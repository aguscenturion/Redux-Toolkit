import { configureStore} from "@reduxjs/toolkit";
//importacion del reductor de autenticacion
import AuthReducer from "./features/authSlice";


export default configureStore({
    //se registra el reductor de autenticacion con la clave 
    reducer: {
        auth: AuthReducer,
    },
});