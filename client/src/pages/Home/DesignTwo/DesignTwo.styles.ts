import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

export const DesignTwoMainWrapper = styled("div")({
  padding: 14,
  width: "100%",
  height: "100%",
});

export const DesignTwoThemeWrapper = styled("div")({
  width: "20%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginLeft: "1rem",
  border: "1px solid #e0e0e0",
  padding: "0.5rem",
  borderRadius: "0.5rem",
});

export const DesignTwoCardWrapper = styled(Card)({
  display: "flex",
  marginTop: 5,
  height: "25vh",
  cursor: "pointer",
});

export const DesignTwoBoxWrapper = styled(motion.div)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const DesignTwoCardContentWrapper = styled(CardContent)({
  flex: "1 0 auto",
  height: "25vh",
});
export const DesignTwoCardFlexedWrapper = styled("div")({
  display: "flex",
});

export const DesignTwoOptionTitleWrapper = styled(Typography)({
  marginRight: "1rem",
  paddingBottom: ".5rem",
});
