import { Link } from "react-router-dom";
import SignUp from "../components/SignUp";
import Login from "../components/Login";

const Auth = () => {
  return (
    <div className="auth">
      <p>Auth</p>
      <Link to="/">Home</Link>
      <div>
        <SignUp />
        <Login />
      </div>

    </div>
  );
};

export default Auth;
