import styles from "./Button.module.css";

function Button({ title, onClick, disabled, page, id }) {
  return (
    <button  disabled = {page===1 && id === "PREV"} id={id} data-testid="button-component" className={styles.button} onClick = {onClick}>
      {title}
    </button>
  );
}

export default Button;
