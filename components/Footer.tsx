import { person } from "@/content/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>
        © {new Date().getFullYear()} {person.name}. {person.location}.
      </span>
      <span className={styles.tagline}>{person.tagline}</span>
    </footer>
  );
}
