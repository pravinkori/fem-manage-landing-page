import Button from "../Button/Button";
import styles from "./Carousel.module.css";

function Carousel() {
  return (
    <section className={`${styles.carousel} | padding-block-700`}>
      <h2 className={`ff-accent fs-secondary-heading fw-bold`}>
        What they've said
      </h2>
      {/* Carousel here */}
      <Button>Get Started</Button>
    </section>
  );
}

export default Carousel;
