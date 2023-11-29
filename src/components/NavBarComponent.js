import LoginButton from "./LoginButtonComponent";
import LogoutButton from "./LogoutButtonComponent";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="sticky h-16 bg-deepblue flex flex-row justify-between items-center">
        <div className="pl-4">Navbar</div>
        <div className="flex flex-row items-center gap-4 pr-4">
            <Link to="/CreateArticle">
                    <p className="self-center">New article</p>
            </Link>
            <LoginButton/>
            <LogoutButton/>
        </div>
      </div>
    );
  };

export default Navbar;