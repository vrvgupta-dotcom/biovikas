import { ventures } from "@/content/profile";
import { accentStyle } from "./accent";
import styles from "./Ventures.module.css";

function Role({ role, period }: { role: string; period: string }) {
  return (
    <div className={styles.role}>
      {role}&nbsp;&nbsp;·&nbsp;&nbsp;{period}
    </div>
  );
}

export default function Ventures() {
  const { featured, compact, platform } = ventures;

  return (
    <section id="ventures" className={`section ${styles.ventures}`}>
      <div className="container">
        <div className="overline">{ventures.overline}</div>
        <h2 className="section-title">{ventures.heading}</h2>

        {featured.map((v) => (
          <article
            key={v.name}
            className={`${styles.card} ${styles.featured} ${v.accent === "gold" ? styles.warm : ""}`}
            style={accentStyle(v.accent)}
          >
            <header className={styles.header}>
              <div>
                <h3 className={styles.name}>{v.name}</h3>
                <Role role={v.role} period={v.period} />
              </div>
              <div className={styles.badge}>{v.badge}</div>
            </header>
            <p className={styles.description}>{v.description}</p>
            <div className={styles.features}>
              {v.features.map((f) => (
                <div key={f.title} className={styles.feature}>
                  <b>{f.title}</b>
                  {f.body}
                </div>
              ))}
            </div>
          </article>
        ))}

        <div className={styles.pair}>
          {compact.map((v) => (
            <article key={v.name} className={`${styles.card} ${styles.compact}`} style={accentStyle(v.accent)}>
              <header className={styles.header}>
                <div>
                  <h3 className={styles.name}>{v.name}</h3>
                  <Role role={v.role} period={v.period} />
                </div>
                <div className={styles.badge}>{v.badge}</div>
              </header>
              <p className={styles.description}>{v.description}</p>
              <div className={styles.highlights}>
                {v.highlights.map((h) => (
                  <div key={h} className={styles.highlight}>
                    {h}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <article className={`${styles.card} ${styles.featured} ${styles.dark}`} style={accentStyle("gold")}>
          <header className={styles.header}>
            <div>
              <h3 className={styles.name}>{platform.name}</h3>
              <Role role={platform.role} period={platform.period} />
            </div>
            <div className={styles.badge}>{platform.badge}</div>
          </header>
          <p className={styles.description}>{platform.description}</p>
          <div className={styles.features}>
            {platform.portfolio.map((p) => (
              <div key={p.name} className={styles.portfolioItem}>
                <div className={styles.portfolioName}>{p.name}</div>
                <div className={styles.portfolioBody}>{p.body}</div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
