import styles from "./Tag.module.css";

/**
 * Tag — a neutral pill for a project tag. Renders an <li>, so use it inside a
 * <ul>. Deliberately monochrome: the card's single accent is the theme badge.
 */
export default function Tag({ label }: { label: string }) {
  return <li className={styles.tag}>{label}</li>;
}
