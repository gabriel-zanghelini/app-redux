import styles from "./Form.module.css";

export const Form = () => {
  return (
    <div className={styles.container}>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="date" max="2999-12-31" placeholder="Birth Date" />
        <span className={styles.checkbox}>
          <input id="cb" type="checkbox" />
          <label htmlFor="cb">Quero receber notícias e promoções</label>
        </span>
      </form>
    </div>
  );
};
