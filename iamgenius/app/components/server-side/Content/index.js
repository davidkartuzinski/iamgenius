import styles from "./content.module.css";

export const Content = async ({ children }) => {
  return (
    <main className={styles.content}>
      <div className={styles.content_inner}>{children}</div>
    </main>
  );
};
