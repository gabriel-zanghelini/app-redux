import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  name: string;
  email: string;
  birthdayMs: number | null;
  wantsNewsAndPromotions: boolean;
}

const initialState: FormState = {
  name: "",
  email: "",
  birthdayMs: null,
  wantsNewsAndPromotions: false,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setBirthday: (state, action: PayloadAction<number>) => {
      state.birthdayMs = action.payload;
    },
    setWantsNewsAndPromotions: (state, action: PayloadAction<boolean>) => {
      state.wantsNewsAndPromotions = action.payload;
    },
  },
});

export const { setName, setEmail, setBirthday, setWantsNewsAndPromotions } =
  formSlice.actions;

export default formSlice.reducer;
