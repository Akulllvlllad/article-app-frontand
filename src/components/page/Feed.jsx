import React from 'react'
import { Post } from '../elements/posts/Post'

export const Feed = () => {
	return (
		<main className='main'>
			<div className='_container'>
				<div className='main-inner'>
					<div className='feed'>
						
						{[...Array(5)].map((_, index) => (
							<Post key={index}/>
						))}
					</div>
					<div className='tags'>
					
					</div>
				</div>
			</div>
		</main>
	)
}


