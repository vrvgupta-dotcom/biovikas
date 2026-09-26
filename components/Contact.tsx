import { contact, person } from "@/content/profile";
import { accentStyle } from "./accent";
import styles from "./Contact.module.css";

const channels = [
  { label: "Email", value: person.email, href: `mailto:${person.email}`, icon: "✉", accent: "teal" as const },
  { label: "Phone", value: person.phone.display, href: person.phone.href, icon: "☎", accent: "gold" as const },
  {
    label: "LinkedIn",
    value: person.linkedin.display,
    href: person.linkedin.href,
    icon: "in",
    accent: "tealDark" as const,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={`overline ${styles.overline}`}>{contact.overline}</div>
          <h2 className={styles.title}>{contact.heading}</h2>
          <p className={styles.body}>{contact.body}</p>
          <ul className={styles.tags}>
            {contact.tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.channels}>
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className={styles.channel}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className={styles.icon} style={accentStyle(c.accent)} aria-hidden="true">
                {c.icon}
              </span>
              <span>
                <span className={styles.label}>{c.label}</span>
                <span className={styles.value}>{c.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
