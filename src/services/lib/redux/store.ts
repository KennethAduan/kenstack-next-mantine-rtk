import { configureStore, createAction } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { rootReducer } from "./reducers";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();
// Encrypt transform configuration
const encryptor = encryptTransform({
  secretKey: "my-super-secret-key", // Use a secure key
  onError: function (error: Error) {
    // Handle the error
    console.error("Encryptor error:", error);
  },
});

// Persist configuration with encryption
const persistConfig = {
  key: "root",
  version: 1,
  storage: storage,
  transforms: [encryptor],
};

const persistedReducer: any = persistReducer<RootState>(
  persistConfig,
  rootReducer
);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// Action creators and types

export type RootState = ReturnType<typeof store.getState>;
export const register = createAction("register");
export type AppDispatch = typeof store.dispatch;
