"use client";

import React from "react";
import LoginForm from "../../components/LoginForm";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react";
import userStore from "../../stores/UserStore";

const users = [
  {
    name: "b2b",
    password: "123",
    type: "legalEntity",
    requisites: [],
  },
  {
    name: "b2c",
    password: "123",
    type: "individual",
    requisites: [],
  },
];

const Login = () => {
  const router = useRouter();

  const { setCurrentUser } = userStore;

  const handleLogin = ({ username, password }) => {
    const findUser = users.find(
      (user) => user.name === username && user.password === password
    );
    if (findUser) {
      setCurrentUser(findUser);
      localStorage.setItem("currentUser", JSON.stringify(findUser));
      router.push("/");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <main>
      <h1 className="my-4">Login Page</h1>
      <LoginForm onSubmit={handleLogin} />
    </main>
  );
};

export default observer(Login);
