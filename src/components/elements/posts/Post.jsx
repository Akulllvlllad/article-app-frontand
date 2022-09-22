import React from 'react'
import { Link } from 'react-router-dom'
import style from './post.module.scss'

export const Post = ({ title, createdAt, imageUrl, updatedAt, _id, user}) => {
	const date = new Date(createdAt)

	return (
		<Link to={_id}>
			<div className={style.post}>
				<div className={style.postImg}>
					<img
						src={`https://articleappkrsc.herokuapp.com${imageUrl}`}
						alt='фотография'
					/>
				</div>
				<div className={style.creator}>
					<div className={style.creatorImg}>
						<img
							src={
								user?.img ||
								'https://d7-invdn-com.investing.com/company_logo/37ce73cfcb7077a7b56f13cf374958c4.jpg?width=170&height=170'
							}
							alt='фото'
						/>
					</div>
					<div className={style.creatorInfo}>
						<p>{user.fullName}</p>
						<p>{user.email}</p>
					</div>
				</div>
				<h3 className={style.title}>{title}</h3>
				<div className={style.TimeInner}>
					<div className={style.time}>
						{`Дата создания статьи:`}{' '}
						<span>{` ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}
					${date.getHours()}:${date.getMinutes()}`}</span>
					</div>
					<div className={style.time}>
						{`Дата последнего обновления статьи:`}{' '}
						<span>{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}${date.getHours()}:${date.getMinutes()}`}</span>
					</div>
				</div>
			</div>
		</Link>
	)
}
