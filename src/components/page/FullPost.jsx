import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import cn from 'classnames'
import { useActions } from '../hooks/useHooks'
import { useSelector } from 'react-redux'
import { selectPost, selectPostStatus } from '../../store/slices/post'

export const FullPost = () => {
	const isLoading = useSelector(selectPostStatus)
	const post = useSelector(selectPost)
	let { id } = useParams()
	const { fetchPost, deletePost } = useActions()
	const navigate = useNavigate()
	React.useEffect(() => {
		fetchPost(id)
	}, [id])

	const deleteOne = () => {
		navigate('/')
		deletePost(id)
	}


	if (isLoading) {
		return (
			<main className='fullPostPage'>
				<div className='_container'>
					<div className='fullPost-inner'>
						<div className='fullPost'>
							<div className='fullPost-img skeleton'></div>
							<div className='fullPost-body'>
								<h3 className={cn('fullPost-title', { skeleton: true })}>{}</h3>
								<div className='fullPost-text skeleton '>{}</div>
								<div className='fullPost-tags skeleton'>{}</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		)
	}
	return (
		<main className='fullPostPage'>
			<div className='_container'>
				<div className='fullPost-inner'>
					<div className='fullPost'>
						{Boolean(post.imageUrl) && (
							<div className='fullPost-img'>
								<img
									src={`https://articleappkrsc.herokuapp.com${post.imageUrl}`}
									alt='фотография'
								/>
							</div>
						)}
						<div className='fullPost-body'>
							<h3 className={cn('fullPost-title')}>{post.title}</h3>
							<div className='fullPost-text  '>
								<ReactMarkdown children={post.text} />
							</div>
							<div className='fullPost-tags '>
								{post.tags.map(tag => (
									<span key={tag}>{`#${tag}`}</span>
								))}
							</div>
							<div className='fullPost-buttons '>
								<Link to={`/${id}/edit`} className='_btn change_btn _opacity'>
									Изменить
								</Link>
								<button
									className='_btn delete_btn _opacity'
									onClick={deleteOne}
								>
									Удалить статью
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
