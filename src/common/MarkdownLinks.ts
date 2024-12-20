import * as React from 'react'
import Router from 'next/router'
import { LANGUAGES } from './config'

/**
 * Converts pathname to language and canonical paths.
 */
export function pathnameToLanguage(
  pathname: string
): {
  userLanguage: string
  canonicalAs: string
  canonicalAsServer: string
  canonicalPathname: string
} {
  const userLanguageCandidate = pathname.slice(1, 3) || 'en' // Avoid index out of bounds
  const userLanguage = LANGUAGES.includes(userLanguageCandidate)
    ? userLanguageCandidate
    : 'en'

  const canonicalAs = userLanguage === 'en' ? pathname : pathname.slice(3)
  const canonicalAsServer = canonicalAs.replace(/#(.*)$/, '')

  let canonicalPathname = canonicalAsServer.replace(/^\/api/, '/api-docs')
  if (canonicalPathname !== '/') {
    canonicalPathname = canonicalPathname.replace(/\/$/, '')
  }

  return {
    userLanguage,
    canonicalAs,
    canonicalAsServer,
    canonicalPathname,
  }
}

/**
 * Prevents handling non-left-click navigation.
 */
export function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement>
): boolean {
  return (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  )
}

/**
 * Extracts the active link element from the event target.
 */
function isLink(event: MouseEvent): HTMLElement | null {
  let activeElement = event.target as HTMLElement | null
  while (
    activeElement &&
    activeElement.nodeType === Node.ELEMENT_NODE &&
    activeElement.nodeName !== 'A'
  ) {
    activeElement = activeElement.parentElement
  }

  const link = activeElement as HTMLAnchorElement
  if (
    !link ||
    link.nodeName !== 'A' ||
    link.getAttribute('target') === '_blank' ||
    link.getAttribute('data-no-markdown-link') === 'true'
  ) {
    return null
  }

  return link
}

function handleClick(event: MouseEvent) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return
  }

  const activeElement = isLink(event)
  if (!activeElement) return

  event.preventDefault()
  const as = activeElement.getAttribute('href') || '/'
  const canonicalPathname = pathnameToLanguage(as).canonicalPathname
  Router.push(canonicalPathname, as)
}

function handleMouseOver(event: MouseEvent) {
  const activeElement = isLink(event)
  if (!activeElement) return

  const as = activeElement.getAttribute('href') || '/'
  const canonicalPathname = pathnameToLanguage(as).canonicalPathname

  Router.prefetch(canonicalPathname, as, { priority: true }).catch((err) => {
    if (process.env.NODE_ENV !== 'production') {
      console.error(err)
    }
  })
}

/**
 * A React component to handle Markdown link behavior.
 */
export default function MarkdownLinks() {
  React.useEffect(() => {
    document.addEventListener('click', handleClick)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return null
}
