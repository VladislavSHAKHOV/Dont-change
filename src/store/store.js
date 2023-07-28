import { configureStore } from '@reduxjs/toolkit'
import CoinsSlice from './Slises/coinsSlice'
import orderSlice from './Slises/orderSlice'

export const store = configureStore({
    reducer: {
        coinsList: CoinsSlice,
        order: orderSlice,
    }
})

