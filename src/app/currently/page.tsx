import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <span className={styles.pop}>CURRENTLY</span>
        <div className={styles.container}>
          <p>
            After a challenging personal period caring for a loved one, I
            realized I jumped back into interviews before I was fully ready.
            I&apos;m taking a short pause until May to reset and refocus, and
            I&apos;d love to connect in the meantime—please keep me in mind!
          </p>
          <div>
            <span>
              <a href="mailto:huxley.millard@gmail.com">Send email</a>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
