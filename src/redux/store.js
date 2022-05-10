import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authSlice from './auth/auth-slice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { contactApi } from './contacts/contactsSlice'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactApi.middleware,
  ],

  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     [contactApi.reducerPath]: contactApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     [...getDefaultMiddleware(),contactApi.middleware,],
// })

setupListeners(store.dispatch)



// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter']
// }

// const persistedContactsReducer = persistReducer(contactsPersistConfig,items)

// export const store = configureStore({
//   reducer: {contacts: persistedContactsReducer
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })

// export const persistor = persistStore(store)

