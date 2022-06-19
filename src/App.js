import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserRoute from "./components/UserRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { app } from "./firebase";
import { setUser } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    app.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      <h2>our Registration system</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
