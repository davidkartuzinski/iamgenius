import styles from './blockquote.module.css';

export const Blockquote = ({ content, author }) => {
  return (
    <blockquote className={styles.blockquote}>
      {content}
      <span>{author}</span>
    </blockquote>
  );
};
