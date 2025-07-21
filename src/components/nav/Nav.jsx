import { useState } from "react";
import Styles from "./Nav.module.css";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={Styles["main-nav"]}>
      <div className={Styles["hamburger-menu"]} onClick={toggleMenu}>
        <div className={`${Styles["hamburger-line"]} ${isMenuOpen ? Styles.active : ""}`}></div>
        <div className={`${Styles["hamburger-line"]} ${isMenuOpen ? Styles.active : ""}`}></div>
        <div className={`${Styles["hamburger-line"]} ${isMenuOpen ? Styles.active : ""}`}></div>
      </div>
      
      <ul className={`${Styles["nav-list"]} ${isMenuOpen ? Styles["nav-open"] : ""}`}>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(false)}>About</a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Menu</a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Reservation</a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Order online</a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
