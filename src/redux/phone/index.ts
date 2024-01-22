import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PhoneState {
    visibleReviewPhone: boolean,
}

const initialState: PhoneState = {
    visibleReviewPhone: false,
}

export const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {
        visibleReviewModal: (state, action: PayloadAction<boolean>) => { 
            state.visibleReviewPhone = action.payload 
        },
    }
})

export const { 
    visibleReviewModal,
} = phoneSlice.actions
export const selectUser = (state: any) => state.user
export default phoneSlice.reducer