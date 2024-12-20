import React from 'react'
import { Grid2 as Grid, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

import { routes } from 'common/routes'
import theme from 'common/theme'

import DonationMenu from './DonationMenu'
import ProjectMenu from './ProjectMenu'
import LinkButton from 'components/common/LinkButton'

export default function MainNavMenu({ children }: { children?: React.ReactNode }) {
  const { t } = useTranslation()

  return (
    <Grid container direction="row" wrap="nowrap" alignItems="baseline" spacing={4}>
      <Grid>
        <LinkButton
          variant="outlined"
          size="large"
          color="inherit"
          sx={{ borderColor: theme.palette.primary.main }}
          href={routes.campaigns.index}>
          <Typography variant="button" color="#000000DE">
            {t('nav.donate')}
          </Typography>
        </LinkButton>
      </Grid>
      <Grid>
        <DonationMenu />
      </Grid>
      <Grid>
        <ProjectMenu />
      </Grid>
      {/* <Grid item>
        <DevelopmentMenu />
      </Grid> */}
      {children}
    </Grid>
  )
}
