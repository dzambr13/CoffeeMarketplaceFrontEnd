import { Link } from "react-router-dom";
import Member from "../components/Member";
import Roaster from "../components/Roaster";

const User = () => {
  return (
    <div className="user">
      <p>USER</p>
      <Link to="/"> home </Link>
      <Link to="/shop"> shop </Link>
      <div>
        <Member />
        <Roaster />
        
      </div>
    </div>

  );
};

export default User;
