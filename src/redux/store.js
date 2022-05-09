import { configureStore } from '@reduxjs/toolkit'
// import { persistStore, persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER, } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import items from './contacts/contacts-reducer'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { contactApi } from './contacts/contactsSlice'


export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    [...getDefaultMiddleware(),contactApi.middleware,],
})

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
