import { Typography, Box, Toolbar } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// import theme from 'common/theme'

type Props = {
  title: string
}

export default function AppBarMenu({ title }: Props) {
  const theme = useTheme()
  return (
    <Toolbar
      disableGutters
      variant="dense"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        width: '100%',
        pl: '24px',
      }}>
      <Typography variant="h5" color="primary">
        {title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
        <IconButton>
          <HomeIcon color="action" />
        </IconButton>
        <Typography fontSize={theme.typography.pxToRem(18)} sx={{ px: 0.5, height: '20px' }}>
          /
        </Typography>
        <IconButton sx={{ borderRadius: '25px' }}>
          <Typography>{title}</Typography>
        </IconButton>
      </Box>
    </Toolbar>
  )
}
