import { styled } from '@mui/system'
import theme from 'src/assets/colors/theme'
import { Typography } from '@mui/material'

export const BackButtonWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'fontSize',
})<{ fontSize?: number | string }>(({ fontSize }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.PRIMARY,
  fontWeight: 500,
  fontSize: fontSize ? fontSize : '2rem',
  padding: 10,
  fontFamily: "'Roboto', sans-serif",

  '& .title': {
    display: 'flex',
    cursor: 'pointer',
  },
  '& .parent': {
    display: 'flex',
    alignItems: 'center',
    color: theme.GREY,
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '32.02px',

    '& .MuiSvgIcon-root': {
      marginRight: '12px',
    },
  },
}))

export const StyledSpan = styled(Typography)({
  marginLeft: 8,
  color: theme.PRIMARY,
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '32.02px',
})
