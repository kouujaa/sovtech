import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Typography } from '@mui/material'
import { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router'
import { BackButtonWrapper, StyledSpan } from './BackButton.styles'

interface Props {
  link?: string
  onClick?: () => void
  parent: string
  child: string | ReactNode
  fontSize?: number | string
}
const BackButton: FC<Props> = ({ link, parent, child, onClick, fontSize }) => {
  const navigate = useNavigate()
  return (
    <BackButtonWrapper fontSize={fontSize}>
      <Typography
        variant="h4"
        className="parent"
        onClick={() => {
          if (link) {
            navigate(link)
          } else {
            onClick && onClick()
          }
        }}
      >
        <ArrowBackIcon />
        {parent}
      </Typography>
      <StyledSpan variant="h4">{child || ''}</StyledSpan>
    </BackButtonWrapper>
  )
}

export default BackButton
