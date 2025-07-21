import Nav from "../nav/Nav";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
        <div className={styles["header-container"]}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/Logos/Logo.svg" alt="Little Lemon Logo" />
        </div>
        <Nav />
      </header>
        </div>
    </>
  );
}

export default Header;
