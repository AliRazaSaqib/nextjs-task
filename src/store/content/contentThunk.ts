import { API_METHOD_TYPE, apiManager } from "@/constants/apiManager";
import { iThunkApi } from "@/constants/commonTypes";
import { CONTENT_API_ENDPOINTS } from "@/constants/contentApiEndpoint";
import { iContentData } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserContentThunk = createAsyncThunk<
  iContentData,
  undefined,
  iThunkApi
>("content/userContent", async (_, thunkAPI) => {
  console.log("triggered content", CONTENT_API_ENDPOINTS.USER_CONTENT);
  const response = await apiManager(
    CONTENT_API_ENDPOINTS.USER_CONTENT,
    {},
    API_METHOD_TYPE.GET,
    {}
  );

  console.log(response);

  if (response.status !== 200) {
    return thunkAPI.rejectWithValue(response.data);
  }
  return response.data.data;
});
