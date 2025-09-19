// import { configureStore } from "@reduxjs/toolkit";
// import userData from "./reducer"; 
// import { persistReducer, persistStore } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";


// const persistConfig = {
//   key: 'Store',
//   storage: AsyncStorage,
// //   whitelist: ['userdata'],
// };


// const persistedReducer = persistReducer(persistConfig, userData);


// export const store = configureStore({
//   reducer: persistedReducer,
// });


// export const persistor = persistStore(store);










// // import { configureStore } from '@reduxjs/toolkit';
// // import userData from './reducer';

// // export const store = configureStore({
// //   reducer: {
// //     userData: userData, // normal store
// //   },
// // });
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore, 
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import userData from "./reducer"; 
import authReducer from "../authentications/reducer";


const rootReducer = combineReducers({
  user: userData,
  auth: authReducer,
});


const persistConfig = {
  key: "Store",
  storage: AsyncStorage,
  whitelist: ["auth"], 
};


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);

