"use client";
import { FC, useEffect } from "react";
import { iContentData } from "@/types/types";
import { rehydrateContent } from "./content/contentSlice";
import { useDispatch } from "react-redux";

interface iContentPreloader {
  content: iContentData;
}
const ContentPreloader: FC<iContentPreloader> = ({ content }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rehydrateContent(content));
  }, [dispatch, content]);
  return null;
};

export default ContentPreloader;
