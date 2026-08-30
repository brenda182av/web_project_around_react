import logo from "../../images/Vector.png";

function Header() {
  return (
    <header className="header page__section">
      <img src={logo} alt="Around The U.S." className="header__logo" />
      <div className="line"></div>
    </header>
  );
}

export default Header;
