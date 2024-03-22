import { PersistConfig, persistReducer } from "redux-persist";
import { RootState } from ".";
import storage from "redux-persist/es/storage";

const persistConfig: PersistConfig<RootState> = {
    key: 'root',
    storage,
    whitelist:['loginSlice']
};

export const persistedReducer = (reducer: any) => persistReducer(persistConfig, reducer);