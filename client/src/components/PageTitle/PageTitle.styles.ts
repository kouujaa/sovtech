import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import theme from 'src/assets/colors/theme'

export const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 10px',
  background: theme.WHITE,
  border: `1px solid ${theme.PRIMARY_80}`,
})

export const Title = styled(Typography)({
  color: theme.PRIMARY,
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '32.02px',
})
