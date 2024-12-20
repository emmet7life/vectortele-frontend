import React from 'react'
import { styled, lighten } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

import LinkMenuItem from 'components/common/LinkMenuItem'

import GenericNavMenu from './GenericNavMenu'
import { productsNavItems } from './MenuItemsConstant'

const PREFIX = 'DonationMenu'

const classes = {
  dropdownLinkButton: `${PREFIX}-dropdownLinkButton`,
  dropdownLinkText: `${PREFIX}-dropdownLinkText`,
}

const StyledGenericNavMenu = styled(GenericNavMenu)(({ theme }) => ({
  [`& .${classes.dropdownLinkButton}`]: {
    '&:hover': {
      backgroundColor: lighten(theme.palette.primary.main, 0.9),
    },
  },

  [`& .${classes.dropdownLinkText}`]: {
    width: '100%',
  },
}))

export default function DonationMenu() {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <StyledGenericNavMenu id="menu-donation" label={t('nav.donation-menu')}>
      {productsNavItems.map(({ href, label }, key) => (
        <LinkMenuItem
          href={href}
          selected={router.asPath === href}
          key={key}
          className={classes.dropdownLinkButton}>
          <Typography variant="button" className={classes.dropdownLinkText}>
            {t(label)}
          </Typography>
        </LinkMenuItem>
      ))}
    </StyledGenericNavMenu>
  )
}
