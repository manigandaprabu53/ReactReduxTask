import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './CartSlice'
import ProductReducer from './ProductSlice'

export default configureStore({
    reducer: {
      cart: CartReducer,
      product: ProductReducer
    }
  })