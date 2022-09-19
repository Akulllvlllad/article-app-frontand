import React from 'react'
import { ToggleTheme } from './components/common/toggleTheme'
import { Header } from './components/header/header'
import { Feed } from './components/page/Feed'
import { Login } from './components/page/Login'
import './scss/app.scss'

function App() {
	const [LPopup, setLPopup] = React.useState(false)

	React.useEffect(() => {
		fetch('https://articleappkrsc.herokuapp.com/posts')
			.then(response => response.json())
			.then(json => console.log('3'))
	}, [])

	return (
		<div className='wrapper'>
			<Header setLPopup={setLPopup} />
			<Feed />
			<ToggleTheme />
			
			{LPopup && <Login setLPopup={setLPopup} LPopup={LPopup} />}
		</div>
	)
}

export default App
