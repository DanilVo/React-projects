import styles from './Button.module.css'

function Button({ onClick, children, title, isDisabled }) {
  return (
    <button className={styles.button} onClick={onClick} title={title} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Button