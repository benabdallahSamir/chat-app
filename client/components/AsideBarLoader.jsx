import React from "react";

const AsideBarLoader = ({ className }) => {
  return (
    <div className="flex flex-col justify-center space-y-4 p-4 w-2/5">
      <div className="h-16 bg-gray-300 rounded animate-pulse"></div>
      <div className="h-16 bg-gray-300 rounded animate-pulse"></div>
      <div className="h-16 bg-gray-300 rounded animate-pulse"></div>
      <div className="h-16 bg-gray-300 rounded animate-pulse"></div>
      <div className="h-16 bg-gray-300 rounded animate-pulse"></div>
    </div>
  );
};

export default AsideBarLoader;
