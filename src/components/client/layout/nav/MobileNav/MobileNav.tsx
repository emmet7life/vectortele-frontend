import React, { useEffect } from 'react'

import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

import { SwipeableDrawer, Grid2 as Grid } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { StyledAuthButton } from '../AuthLinks/AuthLinks.styled'
// import PodkrepiLogo from 'components/common/brand/PodkrepiLogo'
import VectorTelecomLogo from 'components/common/brand/VectorTelecomLogo'
import LocaleButton from '../../LocaleButton'
import ProductsMenuMobile from '../ProductsMenuMobile'
import ContactUsMenuMobile from '../ContactUsMenuMobile'
import ApplicationMenuMobile from '../ApplicationMenuMobile'
import ProjectMenuMobile from '../ProjectMenuMobile'
import { AuthLinks } from '../AuthLinks/AuthLinks'
import { routes } from 'common/routes'

import {
  CloseButton,
  DonateButton,
  LocaleButtonWrapper,
  NavMenuWrapper,
  OpenMenuHeader,
} from './MobileNav.styled'

type NavDeckProps = {
  mobileOpen: boolean
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileNav({ mobileOpen, setMobileOpen }: NavDeckProps) {
  const { t } = useTranslation()

  const router = useRouter()
  const { locale } = useRouter()
  const closeNavMenu = () => setMobileOpen(false)

  // Register route change event handlers
  useEffect(() => {
    router.events.on('routeChangeStart', closeNavMenu)

    return () => {
      router.events.off('routeChangeStart', closeNavMenu)
    }
  }, [])

  return (
    <Grid container sx={{ display: { xs: 'flex', md: 'none' } }}>
      <SwipeableDrawer
        anchor="right"
        open={mobileOpen}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        onOpen={() => setMobileOpen(true)}
        onClose={closeNavMenu}>
        <NavMenuWrapper>
          <OpenMenuHeader>
            <Link href={routes.index} passHref>
              <VectorTelecomLogo locale={locale} variant="fixed" />
            </Link>
            <CloseButton edge="end" fontSize="large" onClose={closeNavMenu} />
          </OpenMenuHeader>

          {/* Products */}
          <Grid>
            <ProductsMenuMobile />
          </Grid>

          {/* Services */}
          <Grid>
            <StyledAuthButton fullWidth href={routes.logout}>
              {t('nav.services.index')}
            </StyledAuthButton>
          </Grid>

          {/* Abouts Us */}
          <Grid>
            <StyledAuthButton fullWidth href={routes.logout}>
              {t('nav.about-us.index')}
            </StyledAuthButton>
          </Grid>

          {/* Contact Us */}
          <Grid>
            <ContactUsMenuMobile />
          </Grid>

          {/* FAQ */}
          <Grid>
            <StyledAuthButton fullWidth href={routes.logout}>
              {t('nav.faq.index')}
            </StyledAuthButton>
          </Grid>

          {/* Application */}
          <Grid>
            <ApplicationMenuMobile />
          </Grid>

          {/* Language */}
          <LocaleButtonWrapper>
            <LocaleButton />
          </LocaleButtonWrapper>

          {/* <Grid>
            <ProjectMenuMobile />
          </Grid> */}
          {/* <AuthLinks /> */}
          {/* <Grid textAlign="center">
            <DonateButton
              size="large"
              variant="outlined"
              href={routes.campaigns.index}
              endIcon={<FavoriteIcon color="primary" fontSize="medium" />}>
              {t('nav.donate')}
            </DonateButton>
          </Grid> */}
        </NavMenuWrapper>
      </SwipeableDrawer>
    </Grid>
  )
}
