import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectIsAuth, selectIsLoading } from '../../store/slices/auth'
import { LoaderLogin } from '../common/Loaders'
import { useActions } from '../hooks/useHooks'




export const Header = ({ setLPopup }) => {
	const {logout} = useActions()
	const isAuth = useSelector(selectIsAuth)
	const isLoading = useSelector(selectIsLoading)
	return (
		<header className='header'>
			<div className='_container header_container'>
				<div className='header_content'>
					<Link to='/'> 
						<div className='header_logo _pointer'>🌀</div>
					</Link>

					{isLoading ? (
						<LoaderLogin />
					) : !isAuth ? (
						<nav className='menu'>
							<p
								className='logIn _opacity'
								onClick={() => setLPopup(prev => !prev)}
							>
								ВОЙТИ
							</p>
						</nav>
					) : (
						<nav className='menu'>
							<Link to='/addPost' className='_btn write_btn _opacity'>
								Написать статью
							</Link>
							<p
								className='logIn _opacity'
								onClick={() => {
									if (window.confirm('Вы действительно хотите выйти?')) {
										logout()
									}
								}}
							>
								ВЫЙТИ
							</p>
						</nav>
					)}
				</div>
			</div>
		</header>
	)
}
