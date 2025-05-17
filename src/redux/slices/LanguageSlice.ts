import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const LANGUAGE = 'LANGUAGE';

export type Language =
  | 'en'
  | 'hi'
  | 'bn'
  | 'as'
  | 'te'
  | 'ta'
  | 'mr'
  | 'ka'
  | 'od'
  | 'gu'
  | 'ma'
  | 'pu';

interface LanguageStateType {
  selectedLanguage: Language | null;
}

const initialState: LanguageStateType = {
  selectedLanguage: null,
};

const LanguageSlice = createSlice({
  initialState,
  name: LANGUAGE,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.selectedLanguage = action.payload;
    },
    resetLanguage: state => {
      state.selectedLanguage = null;
    },
  },
});

export const {setLanguage, resetLanguage} = LanguageSlice.actions;
export default LanguageSlice.reducer;
