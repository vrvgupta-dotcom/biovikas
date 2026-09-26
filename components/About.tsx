import { about } from "@/content/profile";
import { accentStyle } from "./accent";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className="overline">{about.overline}</div>
          <h2 className={`section-title ${styles.title}`}>{about.heading}</h2>
          {about.paragraphs.map((text) => (
            <p key={text} className={styles.body}>
              {text}
            </p>
          ))}
          <div className={styles.credentials}>
            {about.credentials.map((cred) => (
              <div
                key={cred.title}
                className={`${styles.credential} ${cred.accent === "gold" ? styles.warm : ""}`}
                style={accentStyle(cred.accent)}
              >
                <div className={styles.credTitle}>{cred.title}</div>
                <div className={styles.credDetail}>{cred.detail}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="overline">{about.competenciesOverline}</div>
          <div className={styles.competencies}>
            {about.competencies.map((item) => (
              <div key={item.title} className={styles.competency} style={accentStyle(item.accent)}>
                <h3 className={styles.compTitle}>{item.title}</h3>
                <div className={styles.compBody}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
