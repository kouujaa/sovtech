import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const useStyles = makeStyles({
  root: {
    float: "right",
    "& .MuiPaginationItem-root": {
      color: "#B0B7C3",
    },
    "& > *": {
      marginTop: 2,
    },
    "& .MuiPaginationItem-icon": {
      width: "30px",
      height: "30px",
      color: "white",
      borderRadius: "10px",
      backgroundColor: "black",
    },
    "& .Mui-selected": {
      backgroundColor: "#162a2a00",
      color: "black",
    },
  },
});

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  borderRadius: "100px",
  border: "solid",
  borderWidth: "1px",
  borderColor: "#C4C4C4",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: "380px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const StyledPagination = styled(Pagination)(({ theme }) => ({
  root: {
    "& .MuiPaginationItem-root": {
      color: "#B0B7C3",
    },
    "& > *": {
      marginTop: theme.spacing(2),
    },
    "& .MuiPaginationItem-icon": {
      width: "30px",
      height: "30px",
      color: "white",
      borderRadius: "10px",
      backgroundColor: "black",
    },
    "& .Mui-selected": {
      backgroundColor: "#162a2a00",
      color: "black",
    },
  },
}));
export default useStyles;
