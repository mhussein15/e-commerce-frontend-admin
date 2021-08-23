import { Route, Switch } from "react-router";
import AdminSignIn from "../AdminPage/index";
import OrdersPage from "../Orders/OrdersPage";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path={"/admin"} component={AdminSignIn} />
        <Route path={"/"} component={OrdersPage} />
      </Switch>
    </>
  );
}
