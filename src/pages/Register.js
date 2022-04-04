import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerInitiate } from "../redux/actions";
import "./Register.css";
const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { currentUser } = useSelector((state) => state.user);
  const history = useNavigate();
  useEffect(() => {
    if (currentUser) {
      history("/");
    }
  }, [currentUser, history]);

  const dispatch = useDispatch();

  const { email, password, displayName, passwordConfirm } = state;
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, displayName));
    setState({ email: "", displayName: "", password: "", passwordConfirm: "" });
  };
  return (
    <div>
      <div id="register-form">
        <form className="form-siginup" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign Up
          </h1>

          <input
            id="displayName"
            className="form-control"
            type="text"
            name="displayName"
            placeholder="Full Name"
            onChange={handleChange}
            value={displayName}
            required
          />
          <input
            id="user-email"
            className="form-control"
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            id="inputPassword"
            className="form-control"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={password}
            required
          />
          <input
            id="passwordConfirm"
            className="form-control"
            type="password"
            name="passwordConfirm"
            placeholder="Repeat password"
            onChange={handleChange}
            value={passwordConfirm}
            required
          />
          <button className="btn btn-primary btn-block" type="submit">
            <i className="fas fa-user-plus"></i> Sign up
          </button>
          <Link to="/login">
            <i className="fas fa-angle-left"></i> Back
          </Link>
        </form>
        <br />
      </div>
    </div>
  );
};

export default Register;
