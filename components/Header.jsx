"use client";

import React from "react";
import userStore from "@/stores/UserStore";
import { observer } from "mobx-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Header = () => {
  const { currentUser, setCurrentUser } = userStore;
  const router = useRouter();

  const currentUserString = localStorage.getItem("currentUser");
  const currentUserLS = JSON.parse(currentUserString);

  useEffect(() => {
    setCurrentUser(currentUserLS);
  }, []);

  useEffect(() => {
    if (!currentUserLS?.type) {
      router.push("/login");
    } else {
      router.push("/");
    }
  }, [currentUserLS, router]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser({});
  };

  return (
    <header className="w-full bg-gray-200 p-4 sticky top-0 z-100">
      <div>
        <h2>
          {currentUser?.type
            ? `${currentUser.type} | ${currentUser.name}`
            : "Login"}
        </h2>
      </div>
      {currentUser?.type && (
        <h2 className="cursor-pointer" onClick={handleLogout}>
          Log out
        </h2>
      )}
    </header>
  );
};

export default observer(Header);
