import Image from "next/image";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <main>
        <div className={styles.row}>
          <div>
            <h1>ABOUT</h1>

            <div className={styles.container}>
              <Image
                src="/images/me2.png"
                alt="ME myself and I"
                width={300}
                height={400}
              />
              <div>
                <p>
                  Javascript, TypeScript, React, HTML & CSS, Node.js, GQL, AWS,
                  TDD. I have experience leading projects and introducing team
                  processes
                </p>
              </div>
            </div>
          </div>
          <span className={styles.graphic}>
            <div role="presentation" aria-hidden="true">
              REACT - TYPESCRIPT - JAVASCRIPT - AWS - GQL - TDD - NODE - HTML -
              CSS - STORYBOOK - GRAFANA - CIRCLE CI - JEST - REACT - VUE - SQL -
              AGILE - JIRA - SPLUNK - GIT - GIT HUB - REACT - TYPESCRIPT -
              JAVASCRIPT - AWS - GQL - TDD - NODE - HTML - CSS - STORYBOOK -
              GRAFANA - CIRCLE CI - JEST - REACT - VUE - SQL - AGILE - JIRA -
              SPLUNK - GIT - GIT HUB - REACT - TYPESCRIPT - JAVASCRIPT - AWS -
              GQL - TDD - NODE - HTML - CSS - STORYBOOK - GRAFANA - CIRCLE CI -
              JEST - REACT - VUE - SQL - AGILE - JIRA - SPLUNK - GIT - GIT HUB -
              REACT - TYPESCRIPT - JAVASCRIPT - AWS - GQL - TDD - NODE - HTML -
              CSS - STORYBOOK - GRAFANA - CIRCLE CI - JEST - REACT - VUE - SQL -
              AGILE - JIRA - SPLUNK - GIT - GIT HUB - REACT - TYPESCRIPT -
              JAVASCRIPT - AWS - GQL - TDD - NODE - HTML - CSS - STORYBOOK -
              GRAFANA - CIRCLE CI - JEST - REACT - VUE - SQL - AGILE - JIRA -
              SPLUNK - GIT - GIT HUB - REACT - TYPESCRIPT - JAVASCRIPT - AWS -
              GQL - TDD - NODE - HTML - CSS - STORYBOOK - GRAFANA - CIRCLE CI -
              JEST - REACT - VUE - SQL - AGILE - JIRA - SPLUNK - GIT - GIT HUB -
              REACT - TYPESCRIPT - JAVASCRIPT - AWS - GQL - TDD - NODE - HTML -
              CSS - STORYBOOK - GRAFANA - CIRCLE CI - JEST - REACT - VUE - SQL -
              AGILE - JIRA - SPLUNK - GIT - GIT HUB - REACT - TYPESCRIPT -
              JAVASCRIPT - AWS - GQL - TDD - NODE - HTML - CSS - STORYBOOK -
              GRAFANA - CIRCLE CI - JEST - REACT - VUE - SQL - AGILE - JIRA -
              SPLUNK - GIT - GIT HUB - REACT - TYPESCRIPT - JAVASCRIPT - AWS -
              GQL - TDD - NODE - HTML - CSS - STORYBOOK - GRAFANA - CIRCLE CI -
              JEST - REACT - VUE - SQL - AGILE - JIRA - SPLUNK - GIT - GIT HUB -
              REACT - TYPESCRIPT - JAVASCRIPT - AWS - GQL - TDD - NODE - HTML -
              CSS - STORYBOOK - GRAFANA - CIRCLE CI - JEST - REACT - VUE - SQL -
              AGILE - JIRA - SPLUNK - GIT - GIT HUB - REACT - TYPESCRIPT -
              JAVASCRIPT - AWS - GQL - TDD - NODE - HTML - CSS - STORYBOOK -
              GRAFANA - CIRCLE CI - JEST - REACT - VUE - SQL - AGILE - JIRA -
              SPLUNK - GIT - GIT HUB - REACT - TYPESCRIPT - JAVASCRIPT - AWS -
              GQL - TDD - NODE - HTML - CSS - STORYBOOK - GRAFANA - CIRCLE CI -
              JEST - REACT - VUE - SQL - AGILE - JIRA - SPLUNK - GIT - GIT HUB -
              REACT - TYPESCRIPT - JAVASCRIPT - AWS - GQL - TDD - NODE - HTML -
              CSS - STORYBOOK - GRAFANA - CIRCLE CI - JEST - REACT - VUE - SQL -
              AGILE - JIRA - SPLUNK - GIT - GIT HUB - REACT - TYPESCRIPT -
              JAVASCRIPT - AWS - GQL - TDD - NODE - HTML - CSS - STORYBOOK -
              GRAFANA - CIRCLE CI - JEST - REACT - VUE - SQL - AGILE - JIRA -
              SPLUNK - GIT - GIT HUB - REACT - TYPESCRIPT - JAVASCRIPT - AWS -
              GQL - TDD - NODE - HTML - CSS - STORYBOOK - GRAFANA - CIRCLE CI -
              JEST - REACT - VUE - SQL - AGILE - JIRA - SPLUNK - GIT - GIT HUB -
              REACT - TYPESCRIPT - JAVASCRIPT - AWS - GQL - TDD - NODE - HTML -
              CSS - STORYBOOK - GRAFANA - CIRCLE CI - JEST - REACT - VUE - SQL -
              AGILE - JIRA - SPLUNK - GIT - GIT HUB - REACT - TYPESCRIPT -
              JAVASCRIPT - AWS - GQL - TDD - NODE - HTML - CSS - STORYBOOK -
              GRAFANA - CIRCLE CI - JEST - REACT - VUE - SQL - AGILE - JIRA -
              SPLUNK - GIT - GIT HUB - REACT - TYPESCRIPT - JAVASCRIPT - AWS -
              GQL - TDD - NODE - HTML - CSS - STORYBOOK - GRAFANA - CIRCLE CI -
              JEST - REACT - VUE - SQL - AGILE - JIRA - SPLUNK - GIT - GIT HUB -
              REACT - TYPESCRIPT - JAVASCRIPT - AWS - GQL - TDD - NODE - HTML -
              CSS - STORYBOOK - GRAFANA - CIRCLE CI - JEST - REACT - VUE - SQL -
              AGILE - JIRA - SPLUNK - GIT - GIT HUB - REACT - TYPESCRIPT -
              JAVASCRIPT - AWS - GQL - TDD - NODE - HTML - CSS - STORYBOOK -
              GRAFANA - CIRCLE CI - JEST - REACT - VUE - SQL - AGILE - JIRA -
              SPLUNK - GIT - GIT HUB - REACT - TYPESCRIPT - JAVASCRIPT - AWS -
              GQL - TDD - NODE - HTML - CSS - STORYBOOK - GRAFANA - CIRCLE CI -
              JEST - REACT - VUE - SQL - AGILE - JIRA - SPLUNK - GIT - GIT HUB -
              REACT - TYPESCRIPT - JAVASCRIPT - AWS - GQL - TDD - NODE - HTML -
              CSS - STORYBOOK - GRAFANA - CIRCLE CI - JEST - REACT - VUE - SQL -
            </div>
            <p
              className={styles.overlay}
              role="contentinfo"
              aria-hidden="false"
            >
              I have 5 years of experience in software development, working as a
              full-stack, front-end, and back-end engineer across startups,
              scale-ups, and large companies, building SaaS and product
              offerings and gaining insight into the strengths and challenges of
              each environment. I have a growth mindset and am confident in my
              ability to work it out.
            </p>
          </span>
        </div>
        <div>
          <h2>My Tech house</h2>
        </div>
      </main>
    </div>
  );
}
