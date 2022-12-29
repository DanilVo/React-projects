import styles from "./Button.module.css";

function Button(props) {
  const { children, disabled } = props;
  return (
    <button {...props} className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
