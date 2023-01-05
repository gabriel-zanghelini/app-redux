import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormFields {
  name: string;
  email: string;
  birthday: string;
  wantsNewsAndPromotions: boolean;
}

export interface FormState {
  fieldsPast: FormFields[];
  present: FormFields;
  fieldsFuture: FormFields[];
}

const initialState: FormState = {
  fieldsPast: [],
  present: {
    name: "",
    email: "",
    birthday: "",
    wantsNewsAndPromotions: false,
  },
  fieldsFuture: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.fieldsPast.push({ ...state.present });
      state.present.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.fieldsPast.push({ ...state.present });
      state.present.email = action.payload;
    },
    setBirthday: (state, action: PayloadAction<string>) => {
      state.fieldsPast.push({ ...state.present });
      state.present.birthday = action.payload;
    },
    setWantsNewsAndPromotions: (state, action: PayloadAction<boolean>) => {
      state.fieldsPast.push({ ...state.present });
      state.present.wantsNewsAndPromotions = action.payload;
    },
    undo: (state) => {
      // futuro += presente
      // presente = passado.last()
      // passado = passado - passado.last()

      state.fieldsFuture.push(state.present);
      state.present = state.fieldsPast[state.fieldsPast.length - 1];
      state.fieldsPast.pop();
    },
    redo: (state) => {
      // passado += presente
      // presente = futuro.last()
      // futuro = futuro - futuro.last()

      state.fieldsPast.push(state.present);
      state.present = state.fieldsFuture[state.fieldsFuture.length - 1];
      state.fieldsFuture.pop();
    },
  },
});

export const {
  setName,
  setEmail,
  setBirthday,
  setWantsNewsAndPromotions,
  undo,
  redo,
} = formSlice.actions;

export default formSlice.reducer;
