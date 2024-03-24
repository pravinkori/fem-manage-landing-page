import styles from "./Feature.module.css";

function Feature() {
  return (
    <section className={`padding-block-700`}>
      <div className={`container`}>
        <div className={`even-columns`}>
          <div className={`flow`}>
            <h2 className={`ff-accent fs-secondary-heading fw-bold`}>
              What's different about Manage?
            </h2>
            <p>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div>
            <ul role="list" className={`${styles["numbered-items"]} flow`}>
              <li>
                <div
                  className={`flow`}
                  style={{ "--flow-spacer": `1em` } as React.CSSProperties}
                >
                  <h3 className={`fs-600 fw-bold`}>
                    Track company-wide progress
                  </h3>
                  <p>
                    See how your day-to-day tasks fit into the wider vision. Go
                    from tracking progress at the milestone level all the way
                    done to the smallest of details. Never lose sight of the
                    bigger picture again.
                  </p>
                </div>
              </li>
              <li>
                <div
                  className={`flow`}
                  style={{ "--flow-spacer": `1em` } as React.CSSProperties}
                >
                  <h3 className={`fs-600 fw-bold`}>
                    Advanced built-in reports
                  </h3>
                  <p>
                    Set internal delivery estimates and track progress toward
                    company goals. Our customisable dashboard helps you build
                    out the reports you need to keep key stakeholders informed.
                  </p>
                </div>
              </li>
              <li>
                <div
                  className={`flow`}
                  style={{ "--flow-spacer": `1em` } as React.CSSProperties}
                >
                  <h3 className={`fs-600 fw-bold`}>
                    Everything you need in one place
                  </h3>
                  <p>
                    Stop jumping from one service to another to communicate,
                    store files, track tasks and share documents. Manage offers
                    an all-in-one team productivity solution.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
