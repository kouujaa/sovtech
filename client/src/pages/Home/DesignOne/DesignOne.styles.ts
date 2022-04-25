import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Box)({
  flex: 1,
  display: "flex",
  width: "100%",
  height: "100%",
});

export const RightToolBarWrapper = styled("div")({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  float: "right",
});

export const SearchDivWrapper = styled("div")({
  width: "15em",
  height: "3.6em",
});

export const DesignOneMainWrapper = styled("div")({
  padding: 14,
  width: "100%",
  height: "100%",
});
