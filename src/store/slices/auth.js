import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios/axios'

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async params => {
	const { data } = await axios.post(
		'/auth/login',
		params
	)

	return data
})

export const fetchMe = createAsyncThunk('auth/fetchMe', async () => {
	const { data } = await axios.get('/auth/me')

	return data
})





export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		data: null,
		status: 'loading',
	},
	reducers: {
		logout: state => {
			state.data = null
			window.localStorage.removeItem('token')
		},
	},
	extraReducers: {
		[fetchAuth.pending]: (state, action) => {
			state.status = 'loading'
			state.data = null
		},
		[fetchAuth.fulfilled]: (state, action) => {
			state.data = action.payload
			state.status = 'loaded'
			if ('token' in action.payload) {
				window.localStorage.setItem('token', action.payload.token)
			}
		},
		[fetchAuth.rejected]: (state, action) => {
			state.data = null
			state.status = 'error'
		},

		[fetchMe.pending]: (state, action) => {
			state.status = 'loading'
			state.data = null
		},
		[fetchMe.fulfilled]: (state, action) => {
			state.data = action.payload
			state.status = 'loaded'

		},
		[fetchMe.rejected]: (state, action) => {
			state.data = null
			state.status = 'error'
		},
	},
})

export const { logout } = authSlice.actions

export const selectIsAuth = state => Boolean(state.auth.data)
export const selectIsLoading = state => Boolean(state.auth.status === 'loading')


export default authSlice.reducer
