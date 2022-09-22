import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectPosts, selectPostsStatus } from '../../store/slices/posts'
import { Post } from '../elements/posts/Post'
import { useActions } from '../hooks/useHooks'

export const Feed = () => {

	const posts = useSelector(selectPosts)
	const isLoading = useSelector(selectPostsStatus)
	const {fetchPosts} = useActions()
	
	React.useEffect(()=>{
		fetchPosts()
		
	},[])
	
	return (
		<main className='main'>
			<div className='_container'>
				<div className='main-inner'>
					<div className='feed'>
						{isLoading === 'loaded' ? (
							posts
								
								.map((obj, index) => <Post key={obj._id} {...obj} />)
						) : (
							<h1>loading...</h1>
						)}
					</div>
					<div className='tags'>

					</div>
				</div>
			</div>
		</main>
	)
}


