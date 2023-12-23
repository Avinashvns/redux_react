import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'count',
    initialState: {
        value: 1,
    },
    reducers: {
        double: (state) => {
            state.value += 2
        },


        triple: (state) => {
            state.value -= 3
        },

    },
})

// Action creators are generated for each case reducer function
export const { double, triple } = counterSlice.actions

export default counterSlice.reducer