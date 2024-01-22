import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    visibleLoginModal: boolean,
    visibleConfirmLogout: boolean
}

const initialState: UserState = {
    visibleLoginModal: false,
    visibleConfirmLogout: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
        visibleLoginModal: (state, action: PayloadAction<boolean>) => { 
            state.visibleLoginModal = action.payload 
        },
        visibleConfirmLogout: (state, action: PayloadAction<boolean>) => { 
            state.visibleConfirmLogout = action.payload 
        }
    }
})

export const { 
    visibleLoginModal,
    visibleConfirmLogout
} = userSlice.actions
export const selectUser = (state: any) => state.user
export default userSlice.reducer