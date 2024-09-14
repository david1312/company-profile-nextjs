import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfigState {
  langID: boolean;
  showToast: boolean;
}

const initialState: ConfigState = {
  langID: true,
  showToast: false,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setLangID(state, action: PayloadAction<boolean>) {
      state.langID = action.payload;
    },
    setShowToast(state, action: PayloadAction<boolean>) {
      state.showToast = action.payload;
    },
  },
});

export const { setLangID, setShowToast } = configSlice.actions;

export default configSlice.reducer;
