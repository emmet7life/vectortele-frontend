import * as React from 'react'

import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LinkButton from 'components/common/LinkButton'
import { useTranslation } from 'next-i18next'
import { productsNavItems } from './MenuItemsConstant'
import { StyledMenuAccordion, classes } from 'components/common/StyledAccordion'

export default function ProductsMenuMobile() {
  const { t } = useTranslation()

  return (
    <StyledMenuAccordion className={classes.accordionWrapper}>
      <AccordionSummary
        className={classes.accordionSummary}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="campaign-panel-content">
        {t('nav.products.index')}
      </AccordionSummary>
      <AccordionDetails>
        {productsNavItems.map(({ href, label }, key) => (
          <LinkButton key={key} fullWidth variant="text" href={href} className={classes.menuItem}>
            {t(label)}
          </LinkButton>
        ))}
      </AccordionDetails>
    </StyledMenuAccordion>
  )
}
