import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles["content-block"]}>
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            suscipit officiis beatae exercitationem, excepturi nam illum, earum
            delectus consequatur facilis et autem sed, nesciunt quas pariatur
            quibusdam eligendi aliquid.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className={styles["image-block"]}>
          <img src="/assets/images/restaurantfood.jpg" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
