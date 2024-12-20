import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import GlobalStyles from '@mui/material/GlobalStyles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
// import LogoWithCopyMenu from 'docs/src/components/action/LogoWithCopyMenu';
import VectorTelecomLogo from 'components/common/brand/VectorTelecomLogo'
import HeaderNavBar from './nav/Header/HeaderNavBar'
import HeaderNavDropdown from './nav/Header/HeaderNavDropdown'
import ThemeModeToggle from './nav/Header/ThemeModeToggle'
// import { DeferredAppSearch } from 'docs/src/modules/components/AppFrame';
// import { useTranslate } from '@mui/docs/i18n';
import { useTranslation } from 'next-i18next'

const Header = styled('header')(({ theme }) => [
  {
    position: 'sticky',
    top: 0,
    transition: theme.transitions.create('top'),
    zIndex: theme.zIndex.appBar,
    backgroundColor: 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(8px)',
    borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
  } as const,
  theme.applyDarkStyles({
    backgroundColor: alpha(theme.palette.primaryDark[900], 0.7),
  }),
])

const HEIGHT = 60

export default function AppHeader() {
  const t = useTranslation()

  return (
    <Header>
      <GlobalStyles
        styles={{
          ':root': {
            '--MuiDocs-header-height': `${HEIGHT}px`,
          },
        }}
      />
      <Container sx={{ display: 'flex', alignItems: 'center', minHeight: HEIGHT }}>
        {/* <LogoWithCopyMenu /> */}
        {/* <VectorTelecomLogo /> */}
        <Box sx={{ display: { xs: 'none', md: 'initial' } }}>
          <HeaderNavBar />
        </Box>
        <Box sx={{ ml: 'auto' }} />
        <Stack direction="row" spacing={1}>
          {/* <DeferredAppSearch /> */}
          {/* <Tooltip title={t('appFrame.github')} enterDelay={300}>
            <IconButton
              component="a"
              color="primary"
              size="small"
              href={gitHubRepository}
              target="_blank"
              rel="noopener"
              data-ga-event-category="header"
              data-ga-event-action="github"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip> */}
          <ThemeModeToggle />
        </Stack>
        <Box sx={{ display: { md: 'none' }, ml: 1 }}>
          <HeaderNavDropdown />
        </Box>
      </Container>
    </Header>
  )
}
