import styles from "./test.module.css";

function Test() {
  return (
    <div>
      <h1 className={styles.test1}>hello</h1>
      <h2 className={styles.test2}>hello again</h2>
      <h3 className={styles.test3}>and again hello</h3>
    </div>
  );
}

export default Test