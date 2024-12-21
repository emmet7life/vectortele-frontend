import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import Image from 'next/image'

type VectorTelecomLogoProps = {
  variant?: 'fixed' | 'adaptive'
  size?: 'small' | 'large' | 'giant'
  locale?: string
}

const sizes = {
  small: [118, 24],
  large: [138, 32],
  giant: [472, 96],
}

const vectorTelecomLogo = '/img/vector-telecom/vector-telecom-logo.png'

export default function VectorTelecomLogo({
  variant = 'fixed',
  size = 'large',
}: VectorTelecomLogoProps) {
  const [width, height] = variant === 'fixed' ? sizes[size] : ['100%', '100%']
  return (
    <Box sx={{ position: 'relative', width, height }}>
      <Image alt="Vector Telecom Logo" src={vectorTelecomLogo} layout="fill" objectFit="contain" />
    </Box>
  )
}
