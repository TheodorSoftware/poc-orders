import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./loginSlice/loginSlice";
import { useDispatch } from "react-redux";
import { persistStore } from "redux-persist";
import { persistedReducer } from "./redux-persist";

export const RootReducer = combineReducers({
    loginSlice: loginSlice.reducer
})

const store = configureStore({
    reducer: persistedReducer(RootReducer),
});

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

const persistor = persistStore(store);

export { store, persistor };