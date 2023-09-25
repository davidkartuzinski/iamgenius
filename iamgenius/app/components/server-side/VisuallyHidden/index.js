import styles from './visually-hidden.module.css';

// https://www.joshwcomeau.com/snippets/react-components/visually-hidden/

const VisuallyHidden = ({ children }) => {
  return <span className={styles.visually_hidden}>{children}</span>;
};

export default VisuallyHidden;
