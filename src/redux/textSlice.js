import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const textSlice = createSlice({
    name: 'text',
    initialState: {
        items: [],
        format: 'html',
        paragraph: 2,
    },
    reducers: {
        changeTextNum: (state, action) => {
            state.paragraph = action.payload
        },
    },

})


export const {changeTextNum} = textSlice.actions
export default textSlice.reducer