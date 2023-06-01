import React from 'react'
import { Fab } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';

const ThemeButton = ({setMode, modeTheme}) => {
  const changeTheme = () => {
    setMode(!modeTheme)
    localStorage.setItem('theme', JSON.stringify(!modeTheme));
  }
  return (
    <Fab variant="contained" color="primary"
    aria-label="change theme"
    sx={{
        position: 'fixed',
        bottom: {xs: 16, md: 30,},
        right: {xs: 16, md: 30,},
        zIndex: 1000,
    }}
    onClick={() => {changeTheme()}}
    >
        <SettingsIcon/>
    </Fab>
  )
}

export default ThemeButton