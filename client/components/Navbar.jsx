"use client";

import { LogOut, User } from "lucide-react";
import { useSelector } from "react-redux";
import NavBarLoader from "./NavBarLoader";

const Navbar = () => {
  const { user } = useSelector((s) => s.user);
  if (!user) return <NavBarLoader />;
  return (
    <nav className="h-16 flex items-center px-2 border-b border-gray-200">
      <div className="flex items-center">
        {user.picture ? (
          <img src={user.picture} alt={user.username} />
        ) : (
          <User size={24} />
        )}
        <p className="ml-3">{user.username}</p>
      </div>
      <LogOut size={24} className="ml-auto cursor-pointer" />
    </nav>
  );
};

export default Navbar;
