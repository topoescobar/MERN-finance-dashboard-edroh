import { Box, useTheme } from '@mui/material'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    const {palette} = useTheme()
    
  return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderBottom={`1px solid ${palette.divider}`}
        ></Box>
    )
}   

export default Navbar