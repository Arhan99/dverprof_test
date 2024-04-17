"use client";

import B2bForm from "@/components/B2b/Form";
import B2cForm from "@/components/B2c/Form";
import RequisitesCards from "@/components/RequisitesCards";
import Modal from "@/components/Modal";
import userStore from "@/stores/UserStore";
import { observer } from "mobx-react";
import { useState } from "react";
import TableB2b from "@/components/B2b/Table";
import TableB2c from "@/components/B2c/Table";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, addRequisite } = userStore;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit = (values) => {
    addRequisite(values);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    setIsOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col w-full p-12">
      <div>
        <h1 className="text-2xl font-bold mb-4">Личный кабинет</h1>
        <div onClick={openModal}>
          + <button>Добавить реквизит для оплаты</button>
        </div>
      </div>
      <RequisitesCards currentUser={currentUser} />
      {currentUser?.type === "legalEntity" && <TableB2b />}
      {currentUser?.type === "individual" && <TableB2c />}
      <Modal isOpen={isOpen} title="Добавление реквизитов" onClose={closeModal}>
        {currentUser?.type === "legalEntity" && <B2bForm onSubmit={onSubmit} />}
        {currentUser?.type === "individual" && <B2cForm onSubmit={onSubmit} />}
      </Modal>
    </main>
  );
}

export default observer(Home);
