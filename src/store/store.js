import { configureStore } from '@reduxjs/toolkit'
import  fdcapi from './fdcapi/fdcapi';
 const store = configureStore({
  reducer: {
    fdcapi
  },
})

export default store;