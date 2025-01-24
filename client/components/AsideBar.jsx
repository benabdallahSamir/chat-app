"use client";
import React, { useEffect } from "react";
import { getAllContacts } from "@/api/messages";
import AsideBarLoader from "./AsideBarLoader";
import { User } from "lucide-react";
import Link from "next/link";
const contacts = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const AsideBar = ({ className }) => {
  const [contacts, setContacts] = React.useState(null);
  useEffect(() => {
    (async () => {
      const res = await getAllContacts();
      if (res === null) return;
      switch (res.status) {
        case 200:
          setContacts(res.data.users);
          break;
        case 204:
          setContacts([]);
          break;
        case 401:
          console.log("Unauthorized");
          break;
        default:
          console.log("Something went wrong");
      }
    })();
  }, []);
  // loading
  if (contacts === null) return <AsideBarLoader />;

  return (
    <aside
      className={`w-1/5 border px-2 pt-2 border-l h-screen border-gray-200 ${className}`}
    >
      <Link
        className="h-10 text-xl font-semibold border-b border-gray-200 block"
        href={"/"}
      >
        Contacts
      </Link>
      {contacts.length === 0 && (
        <p className="block text-center text-xl my-auto">No contacts</p>
      )}
      <ul className="">
        {contacts.map((contact) => (
          <Link
            href={`/chat/${contact.id}`}
            key={contact.id}
            className="flex items-center h-10 duration-300 rounded-lg hover:bg-blue-100 cursor-pointer"
          >
            {contact.picture ? (
              <img
                src={contact.picture}
                alt={contact.username}
                className="rounded-[50%] w-3 h-3"
              />
            ) : (
              <User size={24} className="mr-3" />
            )}
            <p>{contact.username}</p>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default AsideBar;
