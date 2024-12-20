/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'

// import theme from 'common/theme'
import { useTheme } from '@mui/material/styles'
import FaviconMetadata from 'components/common/brand/FaviconMetadata'

import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v14-pagesRouter'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[]
}

export default function MyDocument(props: MyDocumentProps) {

  const theme = useTheme()

  return (
    <Html>
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main} />

        <FaviconMetadata />
        {/* Inject MUI styles first to match with the prepend: true configuration. */}
        <meta name="emotion-insertion-point" content="" />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        {/* must come before the <Main> element */}
        <InitColorSchemeScript attribute="class" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = documentGetInitialProps
