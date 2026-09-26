import { advisory, sectors } from "@/content/profile";
import { accentStyle } from "./accent";
import styles from "./PortfolioAdvisory.module.css";

export default function PortfolioAdvisory() {
  return (
    <section id="portfolio" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className="overline">{sectors.overline}</div>
          <h2 className={styles.title}>{sectors.heading}</h2>
          <div className={styles.list}>
            {sectors.items.map((item) => (
              <div key={item.title} className={styles.sector} style={accentStyle(item.accent)}>
                <h3 className={styles.sectorTitle}>{item.title}</h3>
                <div className={styles.sectorBody}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div id="advisory">
          <div className={`overline ${styles.goldOverline}`}>{advisory.overline}</div>
          <h2 className={styles.title}>{advisory.heading}</h2>
          <div className={styles.list}>
            {advisory.items.map((item) => (
              <div
                key={item.title}
                className={`${styles.engagement} ${item.warm ? styles.warm : ""}`}
                style={accentStyle(item.accent)}
              >
                <h3 className={styles.engagementTitle}>{item.title}</h3>
                <div className={styles.engagementBody}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
