import { useEffect } from "react";
import { useAppDispatch } from "./storeHooks";
import { getUserContentThunk } from "@/store/content/contentThunk";

export const useGetUserContent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserContentThunk());
  }, [dispatch]);
};
