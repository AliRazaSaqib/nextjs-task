"use client";

import { useAppSelector } from "@/hooks/storeHooks";
import React from "react";
import Card from "../reusable-components/Card";
import { useGetUserContent } from "@/hooks/useContentHook";
import Loader from "../reusable-components/loader/Loader";

const InfoList = () => {
  const isLoader = useAppSelector((state) => state.content.loading);
  const { title, description, createdAt } = useAppSelector(
    (state) => state.content.userContent
  );

  useGetUserContent();

  return (
    <div className="p-4 grid m-auto items-center justify-center">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl shadow-lg w-full text-center mb-4">
        <h1 className="text-3xl font-bold text-white">Software Finder</h1>
      </div>

      <div className="w-screen bg-white shadow-md rounded-lg p-4 border border-gray-200 max-w-3xl flex flex-col gap-6 items-center justify-center">
        {isLoader ? (
          <Loader />
        ) : (
          <Card timeStamp={createdAt} title={title} description={description} />
        )}
      </div>
    </div>
  );
};

export default InfoList;
