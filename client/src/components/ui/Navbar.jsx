import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import LogoutIcon from "./icons/LogoutIcon";
import UserIcon from "./icons/UserIcon";
import "./ui.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };
  // const handlechange = () => {
  //   navigate("/applyforleave")
  // };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <div className="navbar__item">
          <UserIcon />
          <p className="navbar__text">{name}</p>
        </div>
        <div className="navbar__item">
          <LogoutIcon
            className="navbar__link"
            title="Logout"
            onClick={handleLogout}
          />
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;