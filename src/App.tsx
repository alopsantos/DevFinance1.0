import React, { useEffect, useState } from "react";
import {
  DollarSign,
  ArrowUpCircle,
  ArrowDownCircle,
  MinusCircle,
  Edit,
} from "react-feather";

import api from "./services/api";
import "./assets/styles/global.css";
import CardStatus from "./components/CardStatus";
import Modal from "./components/Modal";

import Logo from "./assets/images/logo.svg";

interface ITransaction {
  id: number;
  description: string;
  value: number;
  date: string;
}

function App() {

  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    api.get("transactions").then((response) => {
      setTransactions(response.data);
    });
  }, []);

  return (
    <>
      <header>
        <img src={Logo} alt="Logo Dev Finance" />
      </header>

      <main className="container">
        <section id="balance">
          <h2 className="sr-only">Balanço</h2>

          <CardStatus
            id="incomeDisplay"
            icon={ArrowUpCircle}
            title="Entradas"
            valor="R$ 20,00"
          />
          <CardStatus
            id="expenseDisplay"
            icon={ArrowDownCircle}
            title="Saídas"
            valor="R$ 20,00"
          />
          <CardStatus
            id="totalDisplay"
            icon={DollarSign}
            title="Total"
            valor="R$ 20,00"
            status="negativo"
          />
        </section>
        <section id="transaction">
          <h2 className="sr-only">Transações</h2>

          <a
            href="#"
            onClick={() => setIsModalVisible(true)}
            className="button new"
          >
            + Nova Transação
          </a>

          <table id="data-table">
            <thead>
              <tr>
                <th className="description">Descrição</th>
                <th className="expense">Valor</th>
                <th>Data</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => {
                return (
                  <tr>
                    <td key={transaction.id}>{transaction.description}</td>
                    <td>{transaction.value}</td>
                    <td>{transaction.date}</td>
                    <td>
                      <Edit size={20} color="blue" />
                    </td>
                    <td>
                      <MinusCircle size={20} color="red" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)} />
      ) : null}
      <footer>
        <h2>Dev.finance$</h2>
      </footer>
    </>
  );
}

export default App;
