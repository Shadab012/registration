import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoginToRedirect from "./LoginToRedirect";

const UserRoute = ({ children, ...rest }) => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet {...rest} /> : <LoginToRedirect />;
};

export default UserRoute;
