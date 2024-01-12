import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { useAppSelector } from '../ReduxHooks'
import { useMemo } from 'react'
import { boolean } from 'yup'

interface RightSideBarState {
    openClose: null | boolean
}

const initialState = { openClose: false } as RightSideBarState

const RightSlideBarSlices = createSlice({
    name: 'rightsidebar',
    initialState,
    reducers: {
        RightSideBarClose(state) {
            state.openClose = false
        },
        RightSideBarOpen(state) {
            state.openClose = true
        },
    },
})

export const { RightSideBarClose, RightSideBarOpen } = RightSlideBarSlices.actions
export default RightSlideBarSlices.reducer
const selectOpenClose = (state: RootState) => state.rightsidebar.openClose
export const useRightSideBarSatatus = () => {
    const openClose = useAppSelector(selectOpenClose)
    return useMemo(() => openClose, [openClose])
} 