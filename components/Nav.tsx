import { navLinks, person } from "@/content/profile";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <a href="#top" className={styles.logo}>
        {person.name.toUpperCase()}
      </a>
      <div className={styles.links}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className={`${styles.link} ${styles.contact}`}>
          Contact
        </a>
      </div>
    </nav>
  );
}
