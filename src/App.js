import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'


import { ToggleTheme } from './components/common/toggleTheme'
import { Header } from './components/header/header'
import { useActions } from './components/hooks/useHooks'
import { Feed } from './components/page/Feed'
import { Login } from './components/page/Login'
import './scss/app.scss'
import { selectIsAuth } from './store/slices/auth'
import {AddPost} from './components/page/AddPost'
import { FullPost } from './components/page/FullPost'
import { EditPost } from './components/page/EditPost'
function App() {
	const [LPopup, setLPopup] = React.useState(false)
	const isAuth = useSelector(selectIsAuth)
	const {fetchMe} = useActions()
	React.useEffect(() => {
		fetchMe()
	}, [])

	return (
		<div className='wrapper'>
			<Header setLPopup={setLPopup} />
			<Routes>
				<Route path='/' element={<Feed />} />
				<Route path='/addPost' element={<AddPost />} />
				<Route path='/:id' element={<FullPost />} />
				<Route path='/:id/edit' element={<EditPost />} />
			</Routes>
			<ToggleTheme />

			{!isAuth && LPopup && <Login setLPopup={setLPopup} LPopup={LPopup} />}
		</div>
	)
}

export default App
