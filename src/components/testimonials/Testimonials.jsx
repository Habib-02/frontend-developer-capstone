import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <>
      <div className={styles["testimonial-wrapper"]}>
        <section className={styles.testimonials}>
          <h2>Testimonials</h2>
          <div>
            <article>
              <span>Rating</span>
              <div>
                <img src="/assets/images/testimonial-pic-1.jpg" alt="" />
                <span>Name</span>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </article>
            <article>
              <span>Rating</span>
              <div>
                <img src="/assets/images/testimonial-pic-2.jpg" alt="" />
                <span>Name</span>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </article>
            <article>
              <span>Rating</span>
              <div>
                <img src="/assets/images/testimonial-pic-3.jpg" alt="" />
                <span>Name</span>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}

export default Testimonials;
