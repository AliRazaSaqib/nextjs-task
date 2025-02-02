import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserContentThunk } from "./contentThunk";
import { iContentData } from "@/types/types";

export interface iStoreContent {
  data: iContentData[];
  loading: boolean;
}

const initialState: iStoreContent = {
  data: [],
  loading: true,
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    rehydrateContent(state, action: PayloadAction<iStoreContent>) {
      state.data = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserContentThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getUserContentThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserContentThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { rehydrateContent } = contentSlice.actions;
export default contentSlice.reducer;
