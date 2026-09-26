import { hero, person } from "@/content/profile";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.eyebrow}>{hero.eyebrow}</div>
        <h1 className={styles.title}>{person.name}</h1>
        <p className={styles.intro}>{hero.intro}</p>
        <div className={styles.ctas}>
          <a href="#ventures" className={styles.primary}>
            Explore Ventures
          </a>
          <a href="#contact" className={styles.secondary}>
            Get in Touch
          </a>
        </div>
      </div>
      <dl className={styles.stats}>
        {hero.stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <dt className={styles.statLabel}>{stat.label}</dt>
            <dd className={styles.statValue}>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
