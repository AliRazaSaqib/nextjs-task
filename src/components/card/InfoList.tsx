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
  const data = useAppSelector((state) => state.content.data);

  useGetUserContent();

  return (
    <div className="p-4 grid m-auto items-center justify-center">
      <div className="w-full text-center mb-4">
        <h1>Software Finder</h1>
        <h2 className="text-base font-semibold">Static NextJs Website</h2>
      </div>

      <div className="w-screen bg-white shadow-md rounded-lg p-4 border border-gray-200 max-w-3xl flex flex-col gap-6 items-center justify-center">
        {isLoader ? (
          <Loader />
        ) : data?.length > 0 ? (
          data.map((item) => (
            <Card
              key={item.id}
              timeStamp={item.createdAt}
              title={item.title}
              description={item.description}
            />
          ))
        ) : (
          <Error text="No data found" />
        )}
      </div>
    </div>
  );
};

export default InfoList;
