import * as React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import useLocalStorageState from './useLocalStorageState'

export function useColorSchemeShim() {
  const [mode, setMode] = useLocalStorageState('mui-mode', 'system')
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true })
  const systemMode = prefersDarkMode ? 'dark' : 'light'

  return {
    mode,
    systemMode,
    setMode,
  }
}
