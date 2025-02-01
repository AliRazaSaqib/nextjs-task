"use client";

import { useAppSelector } from "@/hooks/storeHooks";
import React from "react";
import Card from "../reusable-components/Card";
import { useGetUserContent } from "@/hooks/useContentHook";
import Loader from "../reusable-components/loader/Loader";
import "./style.scss";
import { Error } from "../reusable-components/error/Error";

const InfoList = () => {
  const isLoader = useAppSelector((state) => state.content.loading);
  const { title, description, createdAt } = useAppSelector(
    (state) => state.content.userContent
  );

  useGetUserContent();

  console.log(title);
  return (
    <div className="p-4 grid m-auto items-center justify-center">
      <div className="w-full text-center mb-4">
        <h1>Software Finder</h1>
      </div>

      <div className="w-screen bg-white shadow-md rounded-lg p-4 border border-gray-200 max-w-3xl flex flex-col gap-6 items-center justify-center">
        {isLoader ? (
          <Loader />
        ) : title ? (
          <Card timeStamp={createdAt} title={title} description={description} />
        ) : (
          <Error text="No data found" />
        )}
      </div>
    </div>
  );
};

export default InfoList;
