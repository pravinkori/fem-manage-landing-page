// import styles from "./CTA.module.css";

function CTA() {
  return (
    <section
      className={`cta | ff-accent bg-accent-400 text-neutral-100 padding-block-700`}
    >
      <div className={`container`}>
        <div className={`even-columns`}>
          <div>
            <p className={`fs-secondary-heading fw-bold`}>
              Simplify how your team works today.
            </p>
          </div>
          <div>
            <button className={`button`} data-type="inverted">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
