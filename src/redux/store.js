import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/authSlice';
import dashboardReducer from './features/dashboardSlice';
import businessReducer from './features/businessSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'] // only auth will be persisted
};

const rootReducer = combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer,
    business: businessReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store); 