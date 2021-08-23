import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signout } from "../../store/actions/authActions";
import { NavBarLinks } from "./styles";
export default function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.authReducer.user);

  const handleSignout = (history) => {
    dispatch(signout(history));
    history.replace("/admin");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid d-flex align-items-baseline">
        <a className="navbar-brand mr-3 font-weight-bold p-0">
          Beyond Admin Panel
        </a>

        <div>
          <ul className="navbar-nav">
            {user === null ? (
              ""
            ) : (
              <>
                <NavBarLinks className="nav-item mr-3">
                  <Link
                    className="nav-link"
                    onClick={() => handleSignout(history)}
                  >
                    Logout
                  </Link>
                </NavBarLinks>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
