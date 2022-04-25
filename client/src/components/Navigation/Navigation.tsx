import Looks3Icon from "@mui/icons-material/Looks3";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import { Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ROUTES } from "src/helpers";
import {
  MainBoxStyles,
  MainContainerStyles,
  MainDivStyles,
  MainToolbarStyles,
  NavLinkWrapper,
} from "./Navigation.styles";

const Navigation = () => {
  return (
    <>
      <MainDivStyles position="static">
        <MainContainerStyles maxWidth="xl">
          <MainToolbarStyles disableGutters>
            <MainBoxStyles>
              <Tooltip title="Table Design" placement="right" arrow>
                <NavLinkWrapper>
                  <NavLink to={ROUTES.DESIGN_ONE}>
                    <LooksOneIcon color="inherit" style={{ fontSize: 20 }} />
                  </NavLink>
                </NavLinkWrapper>
              </Tooltip>
              <Tooltip title="Cards Design" placement="right" arrow>
                <NavLinkWrapper>
                  <NavLink to={ROUTES.DESIGN_TWO}>
                    <LooksTwoIcon />
                  </NavLink>
                </NavLinkWrapper>
              </Tooltip>
              <Tooltip title="Fun Design" placement="right" arrow>
                <NavLinkWrapper>
                  <NavLink to={ROUTES.DESIGN_THREE}>
                    <Looks3Icon />
                  </NavLink>
                </NavLinkWrapper>
              </Tooltip>
            </MainBoxStyles>
          </MainToolbarStyles>
        </MainContainerStyles>
      </MainDivStyles>
    </>
  );
};

export default Navigation;
