import styles from "./CTA.module.css";

import Button from "../Button/Button";

function CTA() {
  return (
    <section
      className={`cta | ff-accent bg-accent-400 text-neutral-100 padding-block-700`}
    >
      <div className={`container`}>
        <div className={`even-columns ${styles["vertical-align-center"]}`}>
          <div>
            <p className={`fs-secondary-heading fw-bold`}>
              Simplify how your team works today.
            </p>
          </div>
          <div className={`${styles["justify-self-end"]}`}>
            <Button type="inverted">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
