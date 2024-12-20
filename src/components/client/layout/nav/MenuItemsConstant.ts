import { routes } from 'common/routes'

type NavItem = {
  href: string
  label: string
  enabled?: boolean
}

const allProductsNavItems: NavItem[] = [
  {
    href: routes.campaigns.index,
    label: 'nav.products.wave-guide-components',
  },
  {
    href: routes.campaigns.news.index,
    label: 'nav.products.coaxial-components',
  },
  {
    href: routes.faq_campaigns,
    label: 'nav.products.microwave-millimeterwave-antennas',
  },
  {
    href: routes.faq_campaigns,
    label: 'nav.products.technical-reference',
  },
  {
    href: routes.faq_campaigns,
    label: 'nav.products.in-stock',
  },
]

const allContactUsNavItems: NavItem[] = [
  {
    href: routes.campaigns.index,
    label: 'nav.contact-us.contact-info',
  },
  {
    href: routes.campaigns.news.index,
    label: 'nav.contact-us.agent-distributors',
  },
  {
    href: routes.faq_campaigns,
    label: 'nav.contact-us.request-for-quote',
  }
]

const allApplicationNavItems: NavItem[] = [
  {
    href: routes.campaigns.index,
    label: 'nav.application.weather-radar',
  }
]

export const productsNavItems = allProductsNavItems.filter((el) => typeof el.enabled === 'undefined' ?? el.enabled)
export const contactUsNavItems = allContactUsNavItems.filter((el) => typeof el.enabled === 'undefined' ?? el.enabled)
export const applicationNavItems = allApplicationNavItems.filter((el) => typeof el.enabled === 'undefined' ?? el.enabled)
