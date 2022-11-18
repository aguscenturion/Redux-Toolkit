import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const login = createAsyncThunk(
    "auth/login", 
    async ({formValue, navigate, toast}, {rejectWithValue}) => {
        try {
            const response = await api.login(formValue);
            //se muestra el mensaje de exito
            toast.success("Logueado Correctamente")
            navigate("/")
            return response.data
        }catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

//definir diapositivas de autenticacion
const authSlice = createSlice({
    //nombre del segmento
    name:"auth",
    //estado inicial de la aplicacion
    initialState: {
        user: null,
        error: "",
        loading: false
    },
    //ciclos de vida de 3 promesas que se van a tratar dentro del objeto reductor adicional
    extraReducers: {
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.setItem("profile", JSON.stringify({...action.payload}));
            state.user = action.payload
        },
        [login.rejecte]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default authSlice.reducer