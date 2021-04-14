import React from "react";

import { IconProps } from "react-feather";

import { CardStatus } from "./style";

interface ICardStatus {
  title: string;
  valor: string;
  icon: React.ComponentType<IconProps>;
  id: "expenseDisplay" | "totalDisplay" | "incomeDisplay";
  status?: "negativo" | "positivo";
}

const Cardstatus: React.FC<ICardStatus> = ({
  title,
  icon: Icon,
  valor,
  id,
  status,
}) => {

  return (
    <CardStatus className={status}>
      <h3>
        <span>{title}</span>
        {Icon && (
          <Icon
            size={30}
            color={
              id == "expenseDisplay"
                ? "#E83F5B"
                : "" || id == "incomeDisplay"
                ? "#12A454"
                : "" || id == "totalDisplay"
                ? "#ffffff"
                : ""
            }
          />
        )}
      </h3>
      <p id={id}>{valor}</p>
    </CardStatus>
  );
};

export default Cardstatus;
