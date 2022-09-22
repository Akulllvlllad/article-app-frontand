import React from 'react'
import ContentLoader from 'react-content-loader'

export const LoaderLogin = props => (
	<ContentLoader
		speed={2}
		width={142}
		height={64}
		viewBox='0 0 150 64'
		backgroundColor='#d9d9d9'
		foregroundColor='#ededed'
		{...props}
	>
		<rect x='0' y='0' rx='20' ry='20' width='146' height='54' />
	</ContentLoader>
)


export const LoaderPosts = props => (
	<ContentLoader
		width={450}
		height={400}
		viewBox='0 0 450 400'
		backgroundColor='#f0f0f0'
		foregroundColor='#dedede'
		{...props}
	>
		<rect x='43' y='304' rx='4' ry='4' width='271' height='9' />
		<rect x='44' y='323' rx='3' ry='3' width='119' height='6' />
		<rect x='42' y='77' rx='10' ry='10' width='388' height='217' />
	</ContentLoader>
)
