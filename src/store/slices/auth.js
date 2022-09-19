import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  axios from 'axios'

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (params) => {
	const data = await axios.get('https://articleappkrsc.herokuapp.com/auth/login', params)
	console.log(data);
	return data
})

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		data: null,
		status: 'loading',
	},
	reducers: {},
	extraReducers: {
		[fetchUserData.pending]: (state, action) => {
			state.status = 'loading'
			state.data = null
		},
		[fetchUserData.fulfilled]: (state, action) => {
			state.data = action.payload
			state.status = 'loaded'
		},
		[fetchUserData.rejected]: (state, action) => {
			state.data = null
			state.status = 'error'
		},
	},
})



//export const {} = loginSlice.actions

export default authSlice.reducer
