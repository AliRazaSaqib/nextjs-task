import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserContentThunk } from "./contentThunk";
import { iContentData } from "@/types/types";

interface ContentState {
  userContent: iContentData;
  loading: boolean;
}

const initialState: ContentState = {
  userContent: {} as iContentData,
  loading: true,
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    rehydrateContent(state, action: PayloadAction<iContentData>) {
      console.log("test :", action.payload);
      state.userContent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserContentThunk.fulfilled, (state, action) => {
        state.userContent = action.payload;
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
