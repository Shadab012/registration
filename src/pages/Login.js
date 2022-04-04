import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  fbSignInInitiate,
  googleSignInInitiate,
  loginInitiate,
} from "../redux/actions";
import "./Login.css";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;

  const { currentUser } = useSelector((state) => state.user);
  const history = useNavigate();
  useEffect(() => {
    if (currentUser) {
      history("/");
    }
  }, [currentUser, history]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleFacebookSignIn = () => {
    dispatch(fbSignInInitiate());
  };
  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
  };
  return (
    <div>
      <div id="logreg-forms">
        <form className="form-siginin" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign in
          </h1>
          <div className="social-login">
            <button
              className="btn google-btn social-btn"
              type="button"
              onClick={handleGoogleSignIn}
            >
              <span>
                <i className="fab fa-google-plus-g"></i>Sign in with Google+
              </span>
            </button>
            <button
              className="btn facebook-btn social-btn"
              type="button"
              onClick={handleFacebookSignIn}
            >
              <span>
                <i className="fab fa-facebook-f"></i>Sign in with Facebook
              </span>
            </button>
          </div>
          <p style={{ textAlign: "center" }}>OR</p>
          <input
            id="inputEmail"
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
          <button className="btn btn-secondary btn-block" type="submit">
            <i className="fas fa-sign-in-alt"></i> Sign In
          </button>
          <hr />
          <p>Don't have an account</p>
          <Link to="/register">
            <button
              className="btn btn-primary btn-block"
              type="submit"
              id="btn-signup"
            >
              <i className="fas fa-user-plus"></i>SignUp to a new Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
