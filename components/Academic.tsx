import { academic } from "@/content/profile";
import styles from "./Academic.module.css";

export default function Academic() {
  const { faculty, executiveEducation, publications, honours } = academic;

  return (
    <section id="academic" className={`section ${styles.section}`}>
      <div className="container">
        <div className="overline">{academic.overline}</div>
        <h2 className="section-title">{academic.heading}</h2>

        <div className={styles.grid}>
          <div>
            <div className={`${styles.card} ${styles.teal}`}>
              <h3 className={styles.cardTitle}>{faculty.title}</h3>
              <div className={styles.institution}>
                {faculty.institution}&nbsp;&nbsp;·&nbsp;&nbsp;{faculty.period}
              </div>
              <div className={styles.specialisation}>
                <i>{faculty.specialisation}</i>
              </div>
              <ul className={styles.points}>
                {faculty.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className={`${styles.card} ${styles.gold}`}>
              <h3 className={`${styles.cardTitle} ${styles.execTitle}`}>{executiveEducation.title}</h3>
              <div className={styles.programmes}>
                {executiveEducation.programmes.map((prog) => (
                  <div key={prog.title} className={styles.programme}>
                    <b>{prog.title}</b>
                    <br />
                    {prog.detail}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className={styles.publications}>
              <div className={styles.pubOverline}>Publications</div>
              <div className={styles.pubList}>
                {publications.map((pub) => (
                  <div key={pub.title} className={styles.pub}>
                    <div className={styles.pubKind}>{pub.kind}</div>
                    <div className={styles.pubTitle}>{pub.title}</div>
                    <div className={styles.pubVenue}>{pub.venue}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.honours}>
              <div className={styles.honoursOverline}>Honours &amp; Recognition</div>
              <ul className={styles.honourList}>
                {honours.map((honour) => (
                  <li key={honour}>{honour}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
