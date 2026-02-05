import React from "react";
import UserContext from "../../hooks/userhooks/UserContext";

function Header() {
  const user = React.useContext(UserContext);
  return <header>Dette er headeren, velkommen {user?.name}!</header>;
}

export default Header;
