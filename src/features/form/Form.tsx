import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import styles from "./Form.module.css";
import {
  setBirthday,
  setEmail,
  setName,
  setWantsNewsAndPromotions,
} from "./formSlice";

export const Form = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state: RootState) => state.form);

  return (
    <div className={styles.container}>
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => dispatch(setName(e.target.value))}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <input
          type="date"
          max="2999-12-31"
          placeholder="Birth Date"
          onChange={(e) => dispatch(setBirthday(e.target.valueAsNumber))}
        />
        <span className={styles.checkbox}>
          <input
            id="cb"
            type="checkbox"
            onChange={(e) =>
              dispatch(setWantsNewsAndPromotions(e.target.checked))
            }
          />
          <label htmlFor="cb">Quero receber notícias e promoções</label>
        </span>
      </form>

      <div>
        <h3>Form State:</h3>
        <ul>
          {Object.entries(form).map(([key, value]) => (
            <li key={key}>
              {key}: {`${value}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
