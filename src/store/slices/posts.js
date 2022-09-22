import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios/axios'


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const  {data}  = await axios.get('/posts')

	return data
})




export const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		data: [],
		status: 'loading',
	},
	reducers: {},
	extraReducers: {
		[fetchPosts.pending]: (state, action) => {
			state.status = 'loading'
			state.data = []
		},
		[fetchPosts.fulfilled]: (state, action) => {
			state.data = action.payload
			state.status = 'loaded'
			
		},
		[fetchPosts.rejected]: (state, action) => {
			state.data = null
			state.status = []
		},
	},
})

//export const { } = postsSlice.actions

export const selectPosts = state => state.posts.data
export const selectPostsStatus = state => state.posts.status
export default postsSlice.reducer
