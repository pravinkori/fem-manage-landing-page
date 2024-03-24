import heroIllustration from "/src/assets/images/illustration-intro.svg";
import styles from "./Hero.module.css";
import Button from "../Button/Button";

function Hero() {
  return (
    <section className={`padding-block-700`}>
      <div className={`container`}>
        <div className={`even-columns`}>
          <div className={`flow`}>
            <h1 className={`${styles} ff-accent fs-primary-heading fw-bold`}>
              Bring everyone together to build better products
            </h1>
            <p>
              {" "}
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <Button>Get Started</Button>
          </div>
          <div>
            <img src={heroIllustration} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
