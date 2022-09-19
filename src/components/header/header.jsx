import React from 'react'




export const Header = ({ setLPopup }) => {
	return (
		<header className='header'>
			<div className='_container header_container'>
				<div className='header_content'>
					<div className='header_logo _pointer'>🌀</div>
					<nav className='menu'>
						<button className='_btn write_btn _opacity'>Написать статью</button>
						<p
							
							className='logIn _opacity'
							onClick={() => setLPopup(prev => !prev)}
						>
							ВОЙТИ
						</p>
					</nav>
				</div>
			</div>
		</header>
	)
}
