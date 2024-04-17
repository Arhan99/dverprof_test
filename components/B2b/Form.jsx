import React, { useState } from "react";

const B2bForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    accountNumber: "",
    name: "",
    inn: "",
    kpp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="accountNumber"
        placeholder="Номер счета"
        value={formData.accountNumber}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2"
      />
      <input
        type="text"
        name="name"
        placeholder="Наименование"
        value={formData.name}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2"
      />
      <input
        type="text"
        name="inn"
        placeholder="ИНН"
        value={formData.inn}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2"
      />
      <input
        type="text"
        name="kpp"
        placeholder="КПП"
        value={formData.kpp}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Добавить
      </button>
    </form>
  );
};

export default B2bForm;
