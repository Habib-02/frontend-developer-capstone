import styles from "./Menu.module.css";

function Menu() {
  return (
    <section className={styles.menu}>
      <div>
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <section className={styles['special-dishes']}>
        <article>
          <div>
            <img src="/assets/images/greek salad.jpg" alt="" />
          </div>

            <header>
              <h3>Greek Salad</h3>
              <span>$12.99</span>
            </header>
            <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Nunc senectus adipiscing id eu. Scelerisque at a in integer a ut.
            </p>
            <button>
              <span>Order a delivery</span>
              <span><img src="/assets/icons/motorbike.png" alt="" /></span>
            </button>
        </article>
        <article>
          <div>
            <img src="/assets/images/bruchetta.svg" alt="" />
          </div>

            <header>
              <h3>Bruchetta</h3>
              <span>$12.99</span>
            </header>
            <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Nunc senectus adipiscing id eu. Scelerisque at a in integer a ut.
            </p>
            <button>
              <span>Order a delivery</span>
              <span><img src="/assets/icons/motorbike.png" alt="" /></span>
            </button>
        </article>
        <article>
          <div>
            <img src="/assets/images/lemon dessert.jpg" alt="" />
          </div>

            <header>
              <h3>Greek Salad</h3>
              <span>$12.99</span>
            </header>
            <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Nunc senectus adipiscing id eu. Scelerisque at a in integer a ut.
            </p>
            <button>
              <span>Order a delivery</span>
              <span><img src="/assets/icons/motorbike.png" alt="" /></span>
            </button>
        </article>
      </section>
    </section>
  );
}

export default Menu;
