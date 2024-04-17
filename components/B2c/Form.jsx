import React, { useState } from "react";

const B2cForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
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
        name="cardNumber"
        placeholder="Номер карты"
        value={formData.cardNumber}
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

export default B2cForm;
