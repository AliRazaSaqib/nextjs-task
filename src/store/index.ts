import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contentReducer from "@/store/content/contentSlice";
const rootReducer = combineReducers({
  content: contentReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
