import { configureStore } from '@reduxjs/toolkit'
import BankReducer from './slices/bank-slice'
import  ProductsReducer  from './slices/product-slice'

export const store = configureStore({
  reducer: {
    bank:BankReducer,
    products:ProductsReducer
  },
})

