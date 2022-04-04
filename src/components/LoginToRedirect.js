import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginToRedirect = () => {
  const [count, setCount] = useState(3);
  const history = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && history("/login");
    return () => clearInterval(id);
  }, [count, history]);

  return (
    <div>
      <p>Redirecting in {count} seconds</p>
    </div>
  );
};

export default LoginToRedirect;
