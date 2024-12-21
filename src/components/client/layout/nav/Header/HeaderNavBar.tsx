/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import ButtonBase from '@mui/material/ButtonBase'
import Popper from '@mui/material/Popper'
import Paper from '@mui/material/Paper'
import { debounce } from '@mui/material'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import IconImage from 'components/common/icon/IconImage'
import ROUTES from '../../route'
import { Link } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { useTheme } from '@mui/material/styles'
// import MuiProductSelector from 'docs/src/modules/components/MuiProductSelector';

const Navigation = styled('nav')(({ theme }) => [
  {
    '& > div': {
      cursor: 'default',
    },
    '& ul': {
      padding: 0,
      margin: 0,
      listStyle: 'none',
      display: 'flex',
    },
    '& li': {
      ...theme.typography.body2,
      color: (theme.vars || theme).palette.text.secondary,
      fontWeight: theme.typography.fontWeightSemiBold,
      '& > a, & > button': {
        display: 'inline-block',
        color: 'inherit',
        font: 'inherit',
        textDecoration: 'none',
        padding: theme.spacing('6px', '8px'),
        borderRadius: 0,
        // border: '1px solid transparent',
        '&:hover': {
          color: (theme.vars || theme).palette.text.primary,
          // fontWeight: 700,
          // backgroundColor: (theme.vars || theme).palette.primary[50],
          // borderColor: (theme.vars || theme).palette.primary[100],
          '@media (hover: none)': {
            backgroundColor: 'initial',
            // Reset on touch devices, it doesn't add specificity
          },
        },
        '&:focus-visible': {
          outline: `3px solid ${alpha(theme.palette.primary[500], 0.5)}`,
          outlineOffset: '2px',
        },
      },
    },
  },
  theme.applyDarkStyles({
    '& li': {
      '& > a, & > button': {
        '&:hover': {
          color: (theme.vars || theme).palette.primary[50],
          backgroundColor: alpha(theme.palette.primaryDark[700], 0.8),
          borderColor: (theme.vars || theme).palette.divider,
        },
      },
    },
  }),
])

// TODO CJL
const PRODUCT_IDS = [
  'product-core',
  'product-advanced',
  'product-toolpad',
  'product-templates',
  'product-design',
]

// TODO CJL
const CONTACT_IDS = ['product-core', 'product-advanced', 'product-toolpad']

// TODO CJL
const APPLICATION_IDS = ['product-core']

type ProductSubMenuProps = {
  icon: React.ReactElement<unknown>
  name: React.ReactNode
  description?: React.ReactNode
  chip?: React.ReactNode
  href: string
} & Omit<React.JSX.IntrinsicElements['a'], 'ref'>

const ProductSubMenu = React.forwardRef<HTMLAnchorElement, ProductSubMenuProps>(
  function ProductSubMenu({ icon, name, description, chip, href, ...props }, ref) {
    return (
      <Box
        component={Link}
        href={href}
        ref={ref}
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          py: 2,
          pr: 3,
          '&:hover, &:focus': {
            backgroundColor: (theme.vars || theme).palette.primary[50],
            outline: 0,
            '@media (hover: none)': {
              backgroundColor: 'initial',
              outline: 'initial',
            },
          },
          ...theme.applyDarkStyles({
            '&:hover, &:focus': {
              backgroundColor: alpha(theme.palette.primaryDark[700], 0.4),
            },
          }),
        })}
        {...props}>
        {/* <Box sx={{ px: 2 }}>{icon}</Box> */}
        <div style={{ flexGrow: 1 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
            <Typography variant="body2" sx={{ pl: 3, color: 'text.primary', fontWeight: '400' }}>
              {name}
            </Typography>
            {/* {chip} */}
          </div>
          {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography> */}
        </div>
      </Box>
    )
  },
)

export default function HeaderNavBar() {
  const [subMenuOpen, setSubMenuOpen] =
    React.useState<null | 'products' | 'contact' | 'application'>(null)
  const [subMenuIndex, setSubMenuIndex] = React.useState<number | null>(null)
  const navRef = React.useRef<HTMLUListElement>(null)
  const productSelectorRef = React.useRef<HTMLDivElement>(null)
  const productsMenuRef = React.useRef<HTMLButtonElement>(null)
  const contactMenuRef = React.useRef<HTMLButtonElement>(null)
  const applicationMenuRef = React.useRef<HTMLButtonElement>(null)
  const { t } = useTranslation()
  const theme = useTheme()
  const Typography_Title_P_X = 1

  React.useEffect(() => {
    if (typeof subMenuIndex === 'number' && subMenuOpen === 'products') {
      document.getElementById(PRODUCT_IDS[subMenuIndex])!.focus()
    }
    if (typeof subMenuIndex === 'number' && subMenuOpen === 'contact') {
      document.getElementById(PRODUCT_IDS[subMenuIndex])!.focus()
    }
    if (typeof subMenuIndex === 'number' && subMenuOpen === 'application') {
      document.getElementById(PRODUCT_IDS[subMenuIndex])!.focus()
    }
  }, [subMenuIndex, subMenuOpen])

  function handleKeyDown(event: React.KeyboardEvent) {
    let menuItem

    if (subMenuOpen === 'products') {
      menuItem = productsMenuRef.current!
    } else if (subMenuOpen === 'application') {
      menuItem = applicationMenuRef.current!
    } else if (subMenuOpen === 'contact') {
      menuItem = contactMenuRef.current!
    } else {
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (subMenuOpen === 'products') {
        setSubMenuIndex((prevValue) => {
          if (prevValue === null) {
            return 0
          }
          if (prevValue === PRODUCT_IDS.length - 1) {
            return 0
          }
          return prevValue + 1
        })
      } else if (subMenuOpen === 'contact') {
        setSubMenuIndex((prevValue) => {
          if (prevValue === null) {
            return 0
          }
          if (prevValue === CONTACT_IDS.length - 1) {
            return 0
          }
          return prevValue + 1
        })
      } else if (subMenuOpen === 'application') {
        setSubMenuIndex((prevValue) => {
          if (prevValue === null) {
            return 0
          }
          if (prevValue === APPLICATION_IDS.length - 1) {
            return 0
          }
          return prevValue + 1
        })
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (subMenuOpen === 'products') {
        setSubMenuIndex((prevValue) => {
          if (prevValue === null) {
            return 0
          }
          if (prevValue === 0) {
            return PRODUCT_IDS.length - 1
          }
          return prevValue - 1
        })
      } else if (subMenuOpen === 'contact') {
        setSubMenuIndex((prevValue) => {
          if (prevValue === null) {
            return 0
          }
          if (prevValue === 0) {
            return CONTACT_IDS.length - 1
          }
          return prevValue - 1
        })
      } else if (subMenuOpen === 'application') {
        setSubMenuIndex((prevValue) => {
          if (prevValue === null) {
            return 0
          }
          if (prevValue === 0) {
            return PRODUCT_IDS.length - 1
          }
          return prevValue - 1
        })
      }
    } else if (event.key === 'Escape' || event.key === 'Tab') {
      menuItem.focus()
      setSubMenuOpen(null)
      setSubMenuIndex(null)
    }
  }

  const setSubMenuOpenDebounced = React.useMemo(
    () => debounce(setSubMenuOpen, 40),
    [setSubMenuOpen],
  )

  const setSubMenuOpenUndebounce =
    (value: typeof subMenuOpen) => (event: React.MouseEvent | React.FocusEvent) => {
      setSubMenuOpenDebounced.clear()
      setSubMenuOpen(value)

      if (event.type === 'mouseenter') {
        // Reset keyboard
        setSubMenuIndex(null)
      }
    }

  const handleClickMenu = (value: typeof subMenuOpen) => () => {
    setSubMenuOpenDebounced.clear()
    setSubMenuOpen(subMenuOpen ? null : value)
  }

  React.useEffect(() => {
    return () => {
      setSubMenuOpenDebounced.clear()
    }
  }, [setSubMenuOpenDebounced])

  return (
    <Navigation>
      <ul ref={navRef} onKeyDown={handleKeyDown}>
        {/* Products */}
        <li
          onMouseEnter={setSubMenuOpenUndebounce('products')}
          onFocus={setSubMenuOpenUndebounce('products')}
          onMouseLeave={() => setSubMenuOpenDebounced(null)}
          onBlur={setSubMenuOpenUndebounce(null)}>
          <ButtonBase
            ref={productsMenuRef}
            aria-haspopup
            aria-expanded={subMenuOpen === 'products' ? 'true' : 'false'}
            onClick={handleClickMenu('products')}
            aria-controls={subMenuOpen === 'products' ? 'products-popper' : undefined}>
            <Typography sx={{ px: Typography_Title_P_X }}>{t('nav.products.index')}</Typography>
          </ButtonBase>

          {/* Products Popper */}
          <Popper
            id="products-popper"
            open={subMenuOpen === 'products'}
            anchorEl={productsMenuRef.current}
            transition
            placement="bottom-start"
            style={{
              zIndex: 1200,
              pointerEvents: subMenuOpen === 'products' ? undefined : 'none',
            }}>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={250}>
                <Paper
                  variant="outlined"
                  sx={(theme) => ({
                    mt: 1,
                    minWidth: 298,
                    overflow: 'hidden',
                    borderRadius: 1,
                    py: 0,
                    //   // borderColor: 'grey.200',
                    //   // bgcolor: 'background.paper',
                    boxShadow: `0px 0px 1px ${alpha(theme.palette.primary[200], 0.8)}`,
                    '& ul': {
                      margin: 0,
                      padding: 0,
                      listStyle: 'none',
                    },
                    '& li:not(:last-of-type)': {
                      borderBottom: '1px solid',
                      borderColor: 'grey.100',
                    },
                    '& a': { textDecoration: 'none' },
                    ...theme.applyDarkStyles({
                      borderColor: 'primaryDark.700',
                      bgcolor: 'primaryDark.900',
                      boxShadow: `0px 4px 16px ${alpha(theme.palette.common.black, 0.8)}`,
                      '& li:not(:last-of-type)': {
                        borderColor: 'primaryDark.700',
                      },
                    }),
                  })}>
                  {/* Products Popper Sub Menu List */}
                  <ul>
                    <li>
                      <ProductSubMenu
                        id={PRODUCT_IDS[0]}
                        href={ROUTES.productCore}
                        icon={<IconImage name="product-core" />}
                        name={t('nav.products.wave-guide-components')}
                      />
                    </li>
                    <li>
                      <ProductSubMenu
                        id={PRODUCT_IDS[1]}
                        href={ROUTES.productAdvanced}
                        icon={<IconImage name="product-advanced" />}
                        name={t('nav.products.coaxial-components')}
                      />
                    </li>
                    <li>
                      <ProductSubMenu
                        id={PRODUCT_IDS[2]}
                        href={ROUTES.productToolpad}
                        icon={<IconImage name="product-toolpad" />}
                        name={t('nav.products.microwave-millimeterwave-antennas')}
                      />
                    </li>
                    <li>
                      <ProductSubMenu
                        id={PRODUCT_IDS[3]}
                        href={ROUTES.productTemplates}
                        icon={<IconImage name="product-templates" />}
                        name={t('nav.products.technical-reference')}
                      />
                    </li>
                    <li>
                      <ProductSubMenu
                        id={PRODUCT_IDS[4]}
                        href={ROUTES.productDesignKits}
                        icon={<IconImage name="product-designkits" />}
                        name={t('nav.products.in-stock')}
                      />
                    </li>
                  </ul>
                </Paper>
              </Fade>
            )}
          </Popper>
        </li>

        {/* Services */}
        <li>
          <Link href={ROUTES.pricing}>
            <Typography sx={{ px: Typography_Title_P_X }}>{t('nav.services.index')}</Typography>
          </Link>
        </li>

        {/* About Us */}
        <li>
          <Link href={ROUTES.about}>
            <Typography sx={{ px: Typography_Title_P_X }}>{t('nav.about-us.index')}</Typography>
          </Link>
        </li>

        {/* Contact Us */}
        <li
          onMouseEnter={setSubMenuOpenUndebounce('contact')}
          onFocus={setSubMenuOpenUndebounce('contact')}
          onMouseLeave={() => setSubMenuOpenDebounced(null)}
          onBlur={setSubMenuOpenUndebounce(null)}>
          <ButtonBase
            ref={contactMenuRef}
            aria-haspopup
            aria-expanded={subMenuOpen === 'contact' ? 'true' : 'false'}
            onClick={handleClickMenu('contact')}
            aria-controls={subMenuOpen === 'contact' ? 'contact-popper' : undefined}>
            <Typography sx={{ px: Typography_Title_P_X }}>{t('nav.contact-us.index')}</Typography>
          </ButtonBase>

          {/* Contact Us Popper */}
          <Popper
            id="contact-popper"
            open={subMenuOpen === 'contact'}
            anchorEl={contactMenuRef.current}
            transition
            placement="bottom-start"
            style={{
              zIndex: 1200,
              pointerEvents: subMenuOpen === 'contact' ? undefined : 'none',
            }}>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={250}>
                <Paper
                  variant="outlined"
                  sx={(theme) => ({
                    mt: 1,
                    minWidth: 198,
                    overflow: 'hidden',
                    borderRadius: 1,
                    py: 0,
                    //   // borderColor: 'grey.200',
                    //   // bgcolor: 'background.paper',
                    boxShadow: `0px 0px 1px ${alpha(theme.palette.primary[200], 0.8)}`,
                    '& ul': {
                      margin: 0,
                      padding: 0,
                      listStyle: 'none',
                    },
                    '& li:not(:last-of-type)': {
                      borderBottom: '1px solid',
                      borderColor: 'grey.100',
                    },
                    '& a': { textDecoration: 'none' },
                    ...theme.applyDarkStyles({
                      borderColor: 'primaryDark.700',
                      bgcolor: 'primaryDark.900',
                      boxShadow: `0px 4px 16px ${alpha(theme.palette.common.black, 0.8)}`,
                      '& li:not(:last-of-type)': {
                        borderColor: 'primaryDark.700',
                      },
                    }),
                  })}>
                  {/* Contact Us Popper Sub Menu List */}
                  <ul>
                    <li>
                      <ProductSubMenu
                        id={PRODUCT_IDS[0]}
                        href={ROUTES.productCore}
                        icon={<IconImage name="product-core" />}
                        name={t('nav.contact-us.contact-info')}
                      />
                    </li>
                    <li>
                      <ProductSubMenu
                        id={PRODUCT_IDS[1]}
                        href={ROUTES.productAdvanced}
                        icon={<IconImage name="product-advanced" />}
                        name={t('nav.contact-us.agent-distributors')}
                      />
                    </li>
                    <li>
                      <ProductSubMenu
                        id={PRODUCT_IDS[2]}
                        href={ROUTES.productToolpad}
                        icon={<IconImage name="product-toolpad" />}
                        name={t('nav.contact-us.request-for-quote')}
                      />
                    </li>
                  </ul>
                </Paper>
              </Fade>
            )}
          </Popper>
        </li>

        {/* FAQ */}
        <li>
          <Link href={ROUTES.blog}>
            <Typography sx={{ px: Typography_Title_P_X }}>{t('nav.faq.index')}</Typography>
          </Link>
        </li>

        {/* Application */}
        <li
          onMouseEnter={setSubMenuOpenUndebounce('application')}
          onFocus={setSubMenuOpenUndebounce('application')}
          onMouseLeave={() => setSubMenuOpenDebounced(null)}
          onBlur={setSubMenuOpenUndebounce(null)}>
          <ButtonBase
            ref={applicationMenuRef}
            aria-haspopup
            aria-expanded={subMenuOpen === 'application' ? 'true' : 'false'}
            onClick={handleClickMenu('application')}
            aria-controls={subMenuOpen === 'application' ? 'application-popper' : undefined}>
            <Typography sx={{ px: Typography_Title_P_X }}>{t('nav.application.index')}</Typography>
          </ButtonBase>

          {/* Application Popper */}
          <Popper
            id="application-popper"
            open={subMenuOpen === 'application'}
            anchorEl={applicationMenuRef.current}
            transition
            placement="bottom-start"
            style={{
              zIndex: 1200,
              pointerEvents: subMenuOpen === 'application' ? undefined : 'none',
            }}>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={250}>
                <Paper
                  variant="outlined"
                  sx={(theme) => ({
                    mt: 1,
                    minWidth: 198,
                    overflow: 'hidden',
                    borderRadius: 1,
                    py: 0,
                    //   // borderColor: 'grey.200',
                    //   // bgcolor: 'background.paper',
                    boxShadow: `0px 0px 1px ${alpha(theme.palette.primary[200], 0.8)}`,
                    '& ul': {
                      margin: 0,
                      padding: 0,
                      listStyle: 'none',
                    },
                    '& li:not(:last-of-type)': {
                      borderBottom: '1px solid',
                      borderColor: 'grey.100',
                    },
                    '& a': { textDecoration: 'none' },
                    ...theme.applyDarkStyles({
                      borderColor: 'primaryDark.700',
                      bgcolor: 'primaryDark.900',
                      boxShadow: `0px 4px 16px ${alpha(theme.palette.common.black, 0.8)}`,
                      '& li:not(:last-of-type)': {
                        borderColor: 'primaryDark.700',
                      },
                    }),
                  })}>
                  {/* Application Popper Sub Menu List */}
                  <ul>
                    <li>
                      <ProductSubMenu
                        id={PRODUCT_IDS[0]}
                        href={ROUTES.productCore}
                        icon={<IconImage name="product-core" />}
                        name={t('nav.application.weather-radar')}
                      />
                    </li>
                  </ul>
                </Paper>
              </Fade>
            )}
          </Popper>
        </li>

        {/* Terms & Conditions */}
        <li>
          <Link href={ROUTES.blog}>
            <Typography sx={{ px: Typography_Title_P_X }}>
              {t('nav.terms-conditions.index')}
            </Typography>
          </Link>
        </li>
      </ul>
    </Navigation>
  )
}
