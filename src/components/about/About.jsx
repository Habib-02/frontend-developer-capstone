import styles from "./About.module.css";

function About() {
  return (
    <>
      <section className={styles.about}>
        <article>
          <h2>Little Lemon</h2>
          <span className={styles.subheading}>Chicago</span>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis enim eum fugit, quo velit sit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              necessitatibus esse! Quidem dolorem reiciendis atque.
            </p>
          </div>
        </article>
        <div>
          <img src="/assets/images/chef-1.jpg" alt="" />
          <img src="/assets/images/chef-2.jpg" alt="" />
        </div>
      </section>
    </>
  );
}

export default About;
