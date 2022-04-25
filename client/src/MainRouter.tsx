import { FC, memo } from "react";
import { Route, Routes } from "react-router";
import { ROUTES } from "src/helpers";
import DesignOne from "./pages/Home/DesignOne/DesignOne";
import DesignTwo from "./pages/Home/DesignTwo/DesignTwo";
import DesignThree from "./pages/Home/DesignThree/DesignThree";
import DesignOneDetails from "./pages/Home/DesignOne/DesignOneDetails/DesignOneDetails";
import DesignTwoDetails from "./pages/Home/DesignTwo/DesignTwoDetails/DesignTwoDetails";

const MainRouter: FC = () => (
  <Routes>
    <Route path={ROUTES.HOME}>
      <Route path={ROUTES.DESIGN_ONE}>
        <Route path={ROUTES.DESIGN_ONE} element={<DesignOne />} />
        <Route
          path={ROUTES.DESIGN_ONE_DETAILS}
          element={<DesignOneDetails />}
        />
      </Route>

      <Route path={ROUTES.DESIGN_TWO}>
        <Route path={ROUTES.DESIGN_TWO} element={<DesignTwo />} />
        <Route
          path={ROUTES.DESIGN_TWO_DETAILS}
          element={<DesignTwoDetails />}
        />
      </Route>

      <Route path={ROUTES.DESIGN_THREE}>
        <Route path={ROUTES.DESIGN_THREE} element={<DesignThree />} />
        <Route
          path={ROUTES.DESIGN_THREE_DETAILS}
          element={<DesignOneDetails />}
        />
      </Route>
    </Route>
  </Routes>
);

export default memo(MainRouter);
