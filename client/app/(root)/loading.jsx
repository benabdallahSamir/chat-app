import AsideBarLoader from "@/components/AsideBarLoader";
import NavBarLoader from "@/components/NavBarLoader";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex ">
      <AsideBarLoader />
      <div>
        <NavBarLoader />
      </div>
    </div>
  );
};

export default Loading;
