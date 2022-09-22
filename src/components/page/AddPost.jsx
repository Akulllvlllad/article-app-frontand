import React from 'react'


import 'easymde/dist/easymde.min.css'
import Editor from '../elements/Editor/Editor'


export const AddPost = () => {
	return (
		<main className='addPost'>
			<div className='_container'>
				<div className='addPost-inner'>
					<Editor/>
				</div>
			</div>
		</main>
	)
}





