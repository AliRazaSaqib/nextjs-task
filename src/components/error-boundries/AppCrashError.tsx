"use client";

import React from "react";

export const AppCrashError = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-[600px] px-4 m-auto">
      <h2 className="text-primary-default text-lg md:text-2xl font-semibold">
        Oops, something went wrong!
      </h2>
      <p className="text-secondary-default p-3 rounded-xl text-sm md:text-base">
        Please try again later. If the issue persists, you can:
      </p>
      <ul className="text-secondary-default list-disc list-inside">
        <li>Refresh the page.</li>
        <li>Clear your browser cache and cookies.</li>
        <li>Contact support if the issue continues.</li>
      </ul>
    </div>
  );
};
