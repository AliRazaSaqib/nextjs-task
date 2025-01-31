import { RootState } from "@/store";

export interface iApiError {
  status: number | null;
  message: string;
}

export interface iThunkApi {
  state: RootState;
  rejectValue: iApiError;
}
