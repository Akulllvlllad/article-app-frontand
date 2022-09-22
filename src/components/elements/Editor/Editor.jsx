import React from 'react'
import styles from './editor.module.scss'
import SimpleMDE from 'react-simplemde-editor'
import cn from 'classnames'
import axios from '../../../axios/axios.js'
import {  useNavigate, useParams } from 'react-router-dom'

const Editor = () => {
	const [imageUrl, setImageUrl] = React.useState(
		localStorage.getItem(`imageUrl` || '')
	)
	const [title, setTitle] = React.useState('')
	const [tags, setTags] = React.useState('')
	const navigate = useNavigate()
	const [state, setState] = React.useState(
		localStorage.getItem(`smde_demo` || '')
	)
	const onChange = React.useCallback(value => {
		setState(value)
	})
	const imgRef = React.useRef(null)
	
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
			setImageUrl(data.url)
			localStorage.setItem(`imageUrl`, data.url)
		} catch (error) {
			console.warn(error)
			alert('ошибка при загрузки файла')
		}
	}
	
	const onClickRemoveFile = () => {
		setImageUrl('')
		localStorage.removeItem(`imageUrl`)
	}
	const onSubmit = async () => {
		if (window.confirm('Опубликовать статью?')) {
			try {
				const fields = {
					title,
					imageUrl,
					tags,
					text: state,
				}
				const { data } =  await axios.post('/posts', fields)
				if (data) {
					setImageUrl('')
					localStorage.removeItem(`imageUrl`)
					setTitle('')
					setTags('')
					setState('')
					localStorage.removeItem(`smde_demo`)
				}
				navigate('/')
			} catch (error) {}
		}
	}

	


	return (
		<>
			<div className={styles.top}>
				
				<input
					ref={imgRef}
					type='file'
					className={styles.hidden}
					onChange={handleChangeFile}
				/>
				{imageUrl ? (
					<>
						<button
							onClick={onClickRemoveFile}
							className={cn('_btn', 'delete_btn', '_opacity', styles.uploadBTN)}
						>
							Удалить превью
						</button>
						<div className='file_ibg'>
							<img
								className={styles.image}
								src={`https://articleappkrsc.herokuapp.com${imageUrl}`}
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
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<input
					className={cn(styles.tags, styles.input)}
					placeholder='#Тэги'
					value={tags}
					onChange={e => setTags(e.target.value)}
				/>
			</div>
			<SimpleMDE
				id='demo'
				className={styles.editor}
				value={state}
				options={options}
				onChange={onChange}
			/>
			<div className={styles.buttons}>
				<button
					disabled={!Boolean(state)}
					className={cn('_btn', 'delete_btn', '_opacity')}
					onClick={() => {
						if (window.confirm('Вы действительно хотите удалить тект?')) {
							setState('')
						}
					}}
				>
					Удалить
				</button>
			
					<button onClick={onSubmit} className='_btn _opacity'>
						Отправить
					</button>
				
			</div>
		</>
	)
}

export default Editor
