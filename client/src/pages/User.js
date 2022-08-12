import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <p>USER</p>
      <Link to="/"> home </Link>
      <Link to="/shop"> shop </Link>
    </div>
  );
};

export default User;
