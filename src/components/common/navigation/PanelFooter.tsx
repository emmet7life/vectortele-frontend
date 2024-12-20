import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// import theme from 'common/theme'

type Props = {
  children: React.ReactNode
}

function PanelFooter({ children }: Props) {
  const theme = useTheme()
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '45x',
        background: theme.palette.primary.dark,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingInline: 10,
        paddingLeft: '12rem',
      }}>
      {children}
    </Box>
  )
}

export default PanelFooter
