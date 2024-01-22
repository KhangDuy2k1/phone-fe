import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IOrderItem {
    totalMoney: 0,
}

const initialState: IOrderItem = {
    totalMoney: 0,
}

export const addMoneySice = createSlice({
  name: 'orderItem',
  initialState,
  reducers: {
        increMoney: (state, action: PayloadAction<number>) => { 
           state.totalMoney +=  action.payload
        },
        decreMoney: (state, action: PayloadAction<number>) => { 
            state.totalMoney -=  action.payload
         }
    }
})

export const { 
    increMoney,
    decreMoney
} = addMoneySice.actions
export default addMoneySice.reducer