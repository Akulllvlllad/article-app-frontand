import { useTheme } from '../hooks/use-theme.js'
import React from 'react'
import style from './toggleTheme.module.scss'

export const ToggleTheme = () => {
	const { theme, setTheme } = useTheme()
	const currentTheme = Boolean(theme === 'dart')
	const onChange = (e) => {
		currentTheme ? setTheme('light') : setTheme('dart')
	}
	return (
		<label className={style.switch}>
			<input checked={currentTheme} onChange={onChange} type='checkbox' />
			<span className={style.slider}></span>
		</label>
	)
}
