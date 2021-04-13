import React from "react";

import Expense from "../../assets/images/expense.svg";
import Income from "../../assets/images/income.svg";
import Minus from "../../assets/images/minus.svg";
import Plus from "../../assets/images/plus.svg";
import Total from "../../assets/images/total.svg";

import { Card } from "./style";

const Status: React.FC = ({ children }) => (
  <Card>
    <h3>
      <span>Saídas</span>
      <img src={Income} alt="Icone de entradas" />
    </h3>
    <p id="incomeDisplay">R$ 0,00</p>
  </Card>
);

export default Status;
