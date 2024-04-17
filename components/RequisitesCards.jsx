import React from "react";

const RequisitesCards = ({ currentUser }) => {
  return (
    <div className="grid grid-cols-6 gap-6 mt-12">
      {currentUser?.requisites?.map((obj) =>
        currentUser.type === "legalEntity" ? (
          <div key={obj.inn} className="bg-slate-300 p-6 rounded-lg">
            <h4>
              <b className="mr-2">Номер:</b> {obj.accountNumber}
            </h4>
            <p>
              <b className="mr-2">Наименование:</b>
              {obj.name}
            </p>
            <div className="flex gap-6">
              <p>
                <b>ИНН:</b> {obj.inn}
              </p>
              <p>
                <b>КПП:</b>
                {obj.kpp}
              </p>
            </div>
          </div>
        ) : (
          <div key={obj.cardNumber} className="bg-slate-300 p-6 rounded-lg">
            <h4>
              <b className="mr-2">Номер:</b> {obj.cardNumber}
            </h4>
          </div>
        )
      )}
    </div>
  );
};

export default RequisitesCards;
