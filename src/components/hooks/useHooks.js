import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchAuth, logout, fetchMe } from '../../store/slices/auth'
import {fetchPosts} from '../../store/slices/posts'
import { fetchPost, deletePost } from '../../store/slices/post'
const useAppDispatch = () => useDispatch()
//====================================USE_ACTIONS================================================
const AllActions = {
	fetchAuth,
	logout,
	fetchMe,
deletePost,
	fetchPosts,
	fetchPost
}

export const useActions = () => {
	const appDispatch = useAppDispatch()
	return bindActionCreators(AllActions, appDispatch)
}
