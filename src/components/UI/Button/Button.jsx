import React from 'react'

import { Button as MuiButton } from '@mui/material'

const Button = ({ children }) => {
	return (
		<MuiButton
			sx={{
				background: '#F7AB42',
				p: '10px 30px',
			}}
			variant='contained'
		>
			{children}
		</MuiButton>
	)
}

export default Button
