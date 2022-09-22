import React from 'react'
import { useForm } from 'react-hook-form'
import cn from 'classnames'
import { useActions } from '../hooks/useHooks'

export const Login = React.memo(({ setLPopup }) => {
	const [current, setCurrent] = React.useState(false)
	const loginRef = React.useRef()
	let flag = false

	React.useEffect(() => {
		const handleClickOutside = event => {
			if (flag) {
				if (
					loginRef.current &&
					!event.composedPath().includes(loginRef.current)
				) {
					setLPopup(false)
				}
			}
			flag = true
		}
		document.body.addEventListener('click', handleClickOutside)
		return () => document.body.removeEventListener('click', handleClickOutside)
	}, [])

	React.useEffect(() => {
		const scrollLock = () => {
			window.scrollTo(0, 0)
		}

		window.addEventListener('scroll', scrollLock)
		return () => {
			window.removeEventListener('scroll', scrollLock)
		}
	}, [])

	return (
		<div className='login'>
			<div className='_container login_container'>
				<div className='login_close' onClick={() => setLPopup(false)}>
					➕
				</div>

				<div className='login_wrapper' ref={loginRef}>
					{current ? <Register setCurrent={setCurrent}/> : <LogIn setCurrent={setCurrent}/>}
				</div>
			</div>
		</div>
	)
})

const LogIn = ({setCurrent}) => {
	const {fetchAuth} = useActions()
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: 'tes2t@mail.ru',
			password: '12345',
		},
		mode: 'onChange',
	})
	
	const onSubmit = data => {
		fetchAuth(data)
		console.log(data)}
	return (
		<div className='login_content'>
			<h2 className='login_title'>Войти</h2>
			<form className='login_form' onSubmit={handleSubmit(onSubmit)}>
				<input
					placeholder='email'
					className={cn('input', { errors: errors.email })}
					{...register('email', {
						required: 'Укажите почту',
					})}
				/>
				{errors.email && <p className='errors-text'>{errors.email?.message}</p>}
				<input
					placeholder='password'
					className={cn('input', { errors: errors.password })}
					{...register('password', {
						required: 'Введите пароль',
					})}
				/>
				{errors.password && (
					<p className='errors-text'>{errors.password?.message}</p>
				)}

				<button className='input _btn _submit' type='submit'>
					Отправить
				</button>
				<p className='login_change _opacity' onClick={() => setCurrent(true)}>
					у меня нет аккаунта
				</p>
			</form>
		</div>
	)
}

const Register = ({ setCurrent }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = data => console.log(data)
	return (
		<div className='login_content'>
			<h2 className='login_title'>Регистрация</h2>
			<form className='login_form' onSubmit={handleSubmit(onSubmit)}>
				<input placeholder='email' className='input' {...register('one')} />
				<input placeholder='password' className='input' {...register('two')} />
				<input placeholder='password' className='input' {...register('two')} />
				<button className='input _btn _submit' type='submit'>
					Отправить
				</button>
				<p className='login_change _opacity' onClick={() => setCurrent(false)}>
					у меня есть аккаунта
				</p>
			</form>
		</div>
	)
}
