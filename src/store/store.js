import { configureStore } from '@reduxjs/toolkit'
import auth from './slices/auth'
import posts from './slices/posts'
import post from './slices/post'

export const store = configureStore({
	reducer: {
		auth,
		posts,
		post,
	},
})
