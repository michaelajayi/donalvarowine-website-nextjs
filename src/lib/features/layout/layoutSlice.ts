import { RootState } from "@/lib/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LayoutState = {
  theme: "light" | "dark";
  isDarkMode: boolean;
};

const initialState: LayoutState = {
  theme: "dark",
  isDarkMode: true,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
      state.isDarkMode = action.payload === "dark" ? true : false;
    },
  },
});

export const { setTheme } = layoutSlice.actions;

export const selectLayout = (state: RootState) => state.layout;

export default layoutSlice.reducer;
