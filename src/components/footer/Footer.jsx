import styles from "./Footer.module.css";

function Footer() {
  return (
      <div className={styles["footer-container"]}>
    <footer className={styles.footer}>
      <div className={styles["footer-image"]}>
        <img src="assets/images/restaurantfood.jpg" alt="restaurant food" />
      </div>
        <div>
          <h3>Doormat Navigatoin</h3>
            <ul className={styles["footer-navigation"]}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Reservation</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <nav>
            <ul>
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
          </nav>
        </div>
        <div>
          <h3>Social Media Link</h3>
          <nav>
            <ul>
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
          </nav>
          </div>
    </footer>
      </div>
  );
}

export default Footer;
