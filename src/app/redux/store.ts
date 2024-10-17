// ...
import cartReducer from '../redux/feature/CartSlice'
import orderReducer from '../redux/feature/OrderSlice'
// import { persistStore, persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage';

// const persistConfig={
//     key:'root',
//     storage,
//     timeout: 1000,
//   }
// const persistCartReducer=persistReducer(persistConfig,cartReducer)
// const persistOrderReducer=persistReducer(persistConfig,orderReducer)
// const persistedReducer={
//   cartR:persistCartReducer,
//   orderR:persistOrderReducer
// }
// export const store = configureStore({
//   reducer: persistedReducer,
// })

// export const persistor = persistStore(store);
// // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      cartR:cartReducer,
      orderR:orderReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']