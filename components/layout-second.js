import styles from "./layout.module.css";

export default function LayoutSecondPost({ children }) {
  return <div className={styles.container}>{children}</div>;
}
