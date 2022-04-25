import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import theme from "src/assets/colors/theme";

export const DetailMainWrapper = styled("div")({
  width: "90%",
  height: "100%",
});

export const DetailContentWrapper = styled("div")({
  width: "100%",
  padding: "20px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const DetailOverlayWrapper = styled("div")({
  height: "50vh",
});

export const DetailCardWrapper = styled(Card)({
  display: "flex",
  marginTop: 5,
  height: "40vh",
  width: "60%",
});

export const DetailCardContentWrapper = styled(CardContent)({
  flex: "1 0 auto",
  height: "80vh",
});

export const DetailBoxWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});
export const DetailFlexDivWrapper = styled("div")({
  display: "flex",
  width: "100%",
});

export const DetailOptionWrapper = styled(Typography)({
  marginRight: "1rem",
  paddingBottom: "1rem",
  color: theme.PRIMARY,
});

export const EmptyMessageWrapper = styled(Grid)({
  marginTop: "-10vh",
  display: "flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "10rem",
  width: "10rem",
});
