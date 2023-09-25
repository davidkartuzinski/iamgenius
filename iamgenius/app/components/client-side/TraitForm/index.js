import styles from './trait-form.module.css';

function TraitForm({ children }) {
  return <form className={styles.form}>{children}</form>;
}
export default TraitForm;
