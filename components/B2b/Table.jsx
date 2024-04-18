import React, { useState } from "react";

const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      amount: 100,
      product: "Продукт 1",
      status: "Pending",
      date: "2024-04-17",
    },
    {
      id: 2,
      amount: 150,
      product: "Продукт 2",
      status: "Completed",
      date: "2024-04-16",
    },
  ]);

  const addRow = () => {
    const newRow = {
      id: data.length + 1,
      amount: 0,
      product: "New Product",
      status: "Pending",
      date: "2024-04-17",
    };
    setData([...data, newRow]);
  };

  const handleChange = (e, index, key) => {
    const newData = [...data];
    newData[index][key] = e.target.value;
    setData(newData);
  };

  const handlePayClick = (url) => {
    window.open(url);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
        onClick={addRow}
      >
        Добавить
      </button>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">№</th>
            <th className="px-4 py-2">Сумма</th>
            <th className="px-4 py-2">Товар</th>
            <th className="px-4 py-2">Статус</th>
            <th className="px-4 py-2">Дата</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const isDisabled = item.status === "Completed";
            return (
              <tr key={index} className="bg-gray-100">
                <td className="border px-4 py-2 text-center">{item.id}</td>
                <td className="border px-4 py-2 text-center">
                  <input
                    type="text"
                    value={item.amount}
                    onChange={(e) => handleChange(e, index, "amount")}
                    className="border px-2 py-1 w-full"
                    disabled={isDisabled}
                  />
                </td>
                <td className="border px-4 py-2 text-center">
                  <input
                    type="text"
                    value={item.product}
                    onChange={(e) => handleChange(e, index, "product")}
                    className="border px-2 py-1 w-full"
                    disabled={isDisabled}
                  />
                </td>
                <td className="border px-4 py-2 text-center">
                  {item.status === "Completed" ? (
                    "Оплачено"
                  ) : (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handlePayClick("url")}
                    >
                      Оплатить
                    </button>
                  )}
                </td>
                <td className="border px-4 py-2 text-center">
                  <input
                    type="date"
                    value={item.date}
                    onChange={(e) => handleChange(e, index, "date")}
                    className="border px-2 py-1 w-full"
                    disabled={isDisabled}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
