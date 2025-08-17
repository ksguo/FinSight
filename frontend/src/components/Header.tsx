import Navbar from "@/components/Navbar.tsx";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { logoImage } from "@/assets/assets.ts";


const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-background">
      {/*Logo*/}
      <Link to="/" className="flex items-center">
        <img src={logoImage} alt="Logo" width="200" height="200" />
      </Link>

      {/*Navbar*/}
      <Navbar />
      {/*Sign-in / Sign-up buttons*/}
      <div className="flex space-x-4">
        <Button variant="outline">
          <Link to="/auth">Sign In</Link>
        </Button>
        <Button variant="default">
          <Link to="/register">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
