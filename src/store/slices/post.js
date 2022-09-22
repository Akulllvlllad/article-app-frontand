import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios/axios'

export const fetchPost = createAsyncThunk('post/fetchPost', async (id) => {
	const { data } = await axios.get(`/posts/${id}`)

	return data
})
export const deletePost = createAsyncThunk('post/deletePost', async id => {
	const { data } = await axios.delete(`/posts/${id}`)

	return data
})

export const postSlice = createSlice({
	name: 'post',
	initialState: {
		data: [],
		status: 'loading',
	},
	reducers: {},
	extraReducers: {
		[fetchPost.pending]: (state, action) => {
			state.status = 'loading'
			state.data = []
		},
		[fetchPost.fulfilled]: (state, action) => {
			state.data = action.payload
			state.status = 'loaded'
		},
		[fetchPost.rejected]: (state, action) => {
			state.data = null
			state.status = []
		},

		[deletePost.pending]: (state, action) => {
			state.status = 'loading'
			state.data = []
		},
		[deletePost.fulfilled]: (state, action) => {
			state.status = 'loading'
		},
		[deletePost.rejected]: (state, action) => {
			state.data = null
			state.status = []
		},
	},
})

//export const { } = postsSlice.actions

export const selectPost = state => state.post.data
export const selectPostStatus = state => Boolean(state.post.status === 'loading')
export default postSlice.reducer
