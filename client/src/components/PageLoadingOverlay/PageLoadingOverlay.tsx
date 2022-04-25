import { FC } from "react";
import Backdrop, { BackdropProps } from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { BackdropWrapper } from "./PageLoadingOverlay.styles";

interface Props extends BackdropProps {
  open: boolean;
  solid?: boolean;
}

const PageLoadingOverlay: FC<Props> = ({ open, solid, ...rest }) => {
  return (
    <BackdropWrapper>
      <Backdrop
        {...rest}
        sx={{ color: "#fff", zIndex: 99999 }}
        open={open}
        className={solid ? "solid" : ""}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </BackdropWrapper>
  );
};
export default PageLoadingOverlay;
