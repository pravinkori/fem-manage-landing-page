import "/src/css/App.css";
import styles from "./Carousel.module.css";

function Carousel() {
  return (
    <section className={styles.carousel}>
      <h2 className={`fs-secondary-heading`}>What they've said</h2>
      {/* Carousel here */}
      <button className={styles.button}>Get Started</button>
    </section>
  );
}

export default Carousel;
