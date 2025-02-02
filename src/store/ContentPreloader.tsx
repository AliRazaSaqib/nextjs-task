"use client";
import { FC, useEffect } from "react";
import { iStoreContent, rehydrateContent } from "./content/contentSlice";
import { useDispatch } from "react-redux";

interface iContentPreloader {
  content: iStoreContent;
}
const ContentPreloader: FC<iContentPreloader> = ({ content }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rehydrateContent(content));
  }, [dispatch, content]);
  return null;
};

export default ContentPreloader;
