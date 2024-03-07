import styles from "./CTA.module.css";
import "/src/css/App.css";

function CTA() {
  return (
    <section className={`cta | bg-accent-400 text-accent-100`}>
      <div className={styles.container}>
        <div className={styles["even-columns"]}>
          <div>
            <p className={`fs-secondary-heading fw-bold`}>
              Simplify how your team works today.
            </p>
          </div>
          <div>
            <button className={styles.button} datatype="inverted">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
