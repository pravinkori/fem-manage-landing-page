import heroIllustration from "/src/assets/images/illustration-intro.svg";
import styles from "./Hero.module.css";
import "/src/css/App.css";

function Hero() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles["even-columns"]}>
          <div>
            <h1 className={`${styles} fs-primary-heading fw-bold `}>
              Bring everyone together to build better products
            </h1>
            <p>
              {" "}
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className={styles.button}>Get Started</button>
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
