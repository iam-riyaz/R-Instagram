import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import authReducer from "./Redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { curryGetDefaultMiddleware, getDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware.js";
// import persistReducer from "redux-persist/es/persistReducer";

const persistConfig= {key:"root", storage, version:1};
const persistedReducer= persistReducer(persistConfig,authReducer)

const store= configureStore({
  reducer:persistedReducer,
  middleware:(curryGetDefaultMiddleware)=>
  getDefaultMiddleware({serializableCheck:{ignoreActions:
  [FLUSH,REHYDRATE,PURGE,PAUSE,PERSIST,REGISTER]}})
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading= {null} persistor={persistStore(store)}>

      
      <App />
      </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
