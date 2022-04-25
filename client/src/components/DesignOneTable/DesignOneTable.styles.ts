import { styled } from "@mui/system";
import theme from "src/assets/colors/theme";

export const MainWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  height: "100% !important",

  "& .MuiDataGrid-root": {
    fontSize: "0.875rem",
    height: "75vh",
  },
});

export const ToolBarWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 0px",
});

export const LeftToolBarWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const RightToolBarWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

// TODO:
export const DataGridWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "bgColor",
})<{ bgColor?: string }>(({ bgColor }) => ({
  display: "flex",
  flex: 1,
  // width: '98%',
  // height: '100%',
  backgroundColor: bgColor ?? "transparent",
  border: "none",

  "& .MuiDataGrid-virtualScrollerContent": {
    backgroundColor: theme.BLACK_040,
  },

  "& .MuiDataGrid-row": {
    background: theme.WHITE,
    borderRight: "1px solid transparent",
    width: "99.7%",

    ":nth-of-type(even)": {
      backgroundColor: theme.PRIMARY_BACKGROUND,
      border: `1px solid ${theme.GREY_TABLE}`,
    },

    "& .MuiDataGrid-cell": {
      border: "none",
    },
  },
  "& .MuiTablePagination-root": {
    overflowX: "hidden!important",
  },
}));
