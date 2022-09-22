import React from 'react'
import styles from '../elements/Editor/editor.module.scss'
import axios from '../../axios/axios.js'
import SimpleMDE from 'react-simplemde-editor'
import cn from 'classnames'

import { useNavigate, useParams } from 'react-router-dom'


export const EditPost = () => {
	const [imgE, setImgE] = React.useState('')
	const [titleE, setTitleE] = React.useState('')
	const [tagsE, setTagsE] = React.useState('')
	const [textE, setTextE] = React.useState('')

	const onChange = React.useCallback(value => {
		setTextE(value)
	})
	const imgRef = React.useRef(null)
	const navigate = useNavigate()
	const options = React.useMemo(
		() => ({
			spellChecker: false,
			maxHeight: '600px',
			autofocus: true,
			placeholder: 'Введите текст...',
			status: false,

			autosave: {
				enabled: true,
				uniqueId: 'demo',
				delay: 1000,
			},
		}),
		[]
	)

	const handleChangeFile = async e => {
		try {
			const formData = new FormData()
			formData.append('image', e.target.files[0])
			const { data } = await axios.post('/upload', formData)
			setImgE(data.url)
			localStorage.setItem(`imageUrl`, data.url)
		} catch (error) {
			console.warn(error)
			alert('ошибка при загрузки файла')
		}
	}
const { id } = useParams()
	const onSubmit = async () => {
		if (window.confirm('Обновить статью?')) {
			try {
				const fields = {
					title: titleE,
					imageUrl: imgE,
					tags: tagsE,
					text: textE,
				}
				await axios.patch(`/posts/${id}`, fields).then(res => navigate(`/${id}`))
				
			} catch (error) {
				console.warn(error)
				alert('Ошибка отправки статьи')
			}
		}
	}
	
	
	React.useEffect(() => {
		try {
			axios
				.get(`posts/${id}`)
				.then(
					({data}) => {setImgE(data.imageUrl)
					setTitleE(data.title)
					setTagsE(data.tags)
					setTextE(data.text)}
				)
		} catch (error) {
			console.warn(error)
			alert('Ошибка получения статьи')
		}
	}, [])

	


	
	return (
		<main className='addPost'>
			<div className='_container'>
				<div className='addPost-inner'>
					<div className={styles.top}>
						<input
							ref={imgRef}
							type='file'
							className={styles.hidden}
							onChange={handleChangeFile}
						/>
						{imgE ? (
							<>
								<button
									onClick={() => setImgE('')}
									className={cn(
										'_btn',
										'delete_btn',
										'_opacity',
										styles.uploadBTN
									)}
								>
									Удалить превью
								</button>
								<div className='file_ibg'>
									<img
										className={styles.image}
										src={`https://articleappkrsc.herokuapp.com${imgE}`}
										alt='Uploaded'
									/>
								</div>
							</>
						) : (
							<button
								className={cn('_btn', '_opacity', styles.uploadBTN)}
								onClick={() => imgRef.current.click()}
							>
								Загрузить превью
							</button>
						)}

						<input
							className={cn(styles.title, styles.input)}
							placeholder='Заголовок статьи...'
							value={titleE}
							onChange={e => setTitleE(e.target.value)}
						/>
						<input
							className={cn(styles.tags, styles.input)}
							placeholder='#Тэги'
							value={tagsE}
							onChange={e => setTagsE(e.target.value)}
						/>
					</div>
					<SimpleMDE
						id='demo'
						className={styles.editor}
						value={textE}
						options={options}
						onChange={onChange}
					/>
					<div className={styles.buttons}>
						

						<button onClick={onSubmit} className='_btn _opacity'>
							Обновить
						</button>
					</div>
				</div>
			</div>
		</main>
	)
}
