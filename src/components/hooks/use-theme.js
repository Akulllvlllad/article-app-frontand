import { useLayoutEffect, useState } from 'react'

export const useTheme = () => {
	
	const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'dart')

	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
		window.localStorage.setItem('theme', theme)
	}, [theme])

	return { theme, setTheme }
}
