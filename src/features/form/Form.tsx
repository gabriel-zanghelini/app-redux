import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import {
  setBirthday,
  setEmail,
  setName,
  setWantsNewsAndPromotions,
  undo,
  redo,
} from "./formSlice";
import styles from "./Form.module.css";

export const Form = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state: RootState) => state.form);

  console.log(
    Object.entries(form).map(
      ([key, value]) => `${key}: ${JSON.stringify(value)}`
    )
  );

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.formHeader}>
          <button
            disabled={form.fieldsPast.length === 0}
            onClick={() => dispatch(undo())}
          >
            Undo
          </button>
          <button
            disabled={form.fieldsFuture.length === 0}
            onClick={() => dispatch(redo())}
          >
            Redo
          </button>
        </div>
        <form>
          <input
            type="text"
            placeholder="Name"
            value={form.present.name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
          <input
            type="email"
            placeholder="Email"
            value={form.present.email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          <input
            type="date"
            max="2999-12-31"
            placeholder="Birth Date"
            value={form.present.birthday}
            onChange={(e) => dispatch(setBirthday(e.target.value))}
          />
          <span className={styles.checkbox}>
            <input
              id="cb"
              type="checkbox"
              checked={form.present.wantsNewsAndPromotions}
              onChange={(e) =>
                dispatch(setWantsNewsAndPromotions(e.target.checked))
              }
            />
            <label htmlFor="cb">Quero receber notícias e promoções</label>
          </span>
        </form>
      </div>
    </div>
  );
};
