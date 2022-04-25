import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import theme from "src/assets/colors/theme";

export const MainWrapper = styled(Box)({
  width: "90%",
  height: "100%",
});

export const SubWrapper = styled(Box)({
  width: "100%",
  padding: "20px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
});

export const PageOverlayWrapper = styled("div")({
  height: "50vh",
});

export const CardMainWrapper = styled("div")({
  display: "flex",
  marginTop: 5,
  height: "50vh",
});

export const CardSubWrapper = styled("div")({
  flex: "1 0 auto",
  height: "80vh",
});

export const FlexWrapper = styled(motion.div)({
  display: "flex",
});

export const TitleText = styled(Typography)({
  marginRight: "1rem",
  paddingBottom: "1rem",
  color: theme.PRIMARY,
});

export const EntryText = styled(Typography)({
  color: theme.STAR_WARS_YELLOW,
});
