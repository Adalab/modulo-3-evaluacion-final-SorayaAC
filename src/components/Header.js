////// React import //////
////// Services import //////
////// Partials import //////
////// Styles import //////
import '../styles/layout/header.scss';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Rick&Morty" />
    </header>
  );
};

export default Header;
