import React, { useState } from "react";

const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      amount: 100,
      status: "Pending",
      date: "2024-04-17",
    },
    {
      id: 2,
      amount: 150,
      status: "Completed",
      date: "2024-04-16",
    },
  ]);

  const addRow = () => {
    const newRow = {
      id: data.length + 1,
      amount: 0,
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
        Добавить строку
      </button>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">№</th>
            <th className="px-4 py-2">Сумма</th>
            <th className="px-4 py-2">Ссылка на оплату</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-4 py-2 text-center">{item.id}</td>
              <td className="border px-4 py-2 text-center">
                <input
                  type="text"
                  value={item.amount}
                  onChange={(e) => handleChange(e, index, "amount")}
                  className="border px-2 py-1 w-full"
                />
              </td>
              <td className="border px-4 py-2 text-center">
                {item.status === "Completed" ? (
                  "Оплачено"
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() =>
                      handlePayClick(
                        "https://docs.google.com/document/d/1UQL8kwhz0t00H_7B0Z6nvxryV5XmAtg5bxA8WC2AcOc/edit"
                      )
                    }
                  >
                    Оплатить
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
