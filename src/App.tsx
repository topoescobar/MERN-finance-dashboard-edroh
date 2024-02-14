import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from 'react'
import { themeSettings } from './theme'


function App() {

  const theme = useMemo(() => createTheme(themeSettings), [])
    
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h2>Hello world</h2>

      </ThemeProvider>

    </div>
  )
}

export default App
