import styles from "./Feature.module.css";

const featureList = [
  {
    title: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    title: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    title: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

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
              {featureList.map((feature) => (
                <li key={feature.title}>
                  <div
                    className={`flow`}
                    style={{ "--flow-spacer": "1em" } as React.CSSProperties}
                  >
                    <h3 className={`ff-accent fs-600 fw-bold`}>
                      {feature.title}
                    </h3>
                    <p data-width="wide">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
