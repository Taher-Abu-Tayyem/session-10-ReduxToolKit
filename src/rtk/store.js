import { configureStore } from '@reduxjs/toolkit'
import BankReducer from './slices/bank-slice'
export const store = configureStore({
  reducer: {
    bank:BankReducer
  },
})

