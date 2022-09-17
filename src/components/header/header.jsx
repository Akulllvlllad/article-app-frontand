import React from 'react'




export const Header = () => {
	return (
		<header className='header'>
			<div className='_container header_container'>
				<div className='header_content'>
					<div className='header_logo'>🌀</div>
					<nav className='menu'>
						<button className='_btn write_btn '>Написать статью</button>
						<a className='logIn' href='#'>
							войти
						</a>
					</nav>
				</div>
			</div>
		</header>
	)
}
