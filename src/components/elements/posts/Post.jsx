import React from 'react'
import style from './post.module.scss'

export const Post = () => {
	return (
		<a href='#'>
			<div className={style.post}>
				<div className={style.postImg}>
					<img
						src='https://klike.net/uploads/posts/2019-06/1560231206_1.jpg'
						alt='фотография'
					/>
				</div>
				<h3 className={style.title}>тайтл</h3>
				<div className={style.time}>время создание</div>
			</div>
		</a>
	)
}


