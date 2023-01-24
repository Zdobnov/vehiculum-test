import { Link, useMatch } from "react-router-dom";

import Logo from "../../icons/Logo";
import Wrapper from "../Wrapper/Wrapper";

import "./Header.scss";

const Header = () => {
  const isHomePage = useMatch('/');

  return (
    <header className="header">
      <Wrapper className="header__wrapper">
        <Logo/>
        {!isHomePage && (
          <Link to="/" className="header__back">
            Go Back
          </Link>
        )}
      </Wrapper>
    </header>
  );
};

export default Header;
