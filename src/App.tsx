import React from "react";

import "./assets/styles/global.css";
import CardStatus from './components/CardStatus'

import Logo from "./assets/images/logo.svg";
import Expense from "./assets/images/expense.svg";
import Income from "./assets/images/income.svg";
import Minus from "./assets/images/minus.svg";
import Plus from "./assets/images/plus.svg";
import Total from "./assets/images/total.svg";


function App() {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo Dev Finance" />
      </header>

      <main className="container">
      <section id="balance">
        <h2 className="sr-only">Balanço</h2>
        
        <CardStatus />

        <div className="card">
          <h3>
            <span>Saídas</span>
            <img src={Expense} alt="Imagem de Saídas" />
          </h3>
          <p id="expenseDisplay">R$ 0,00</p>
        </div>

        <div id="card-total" className="card total positivo">
          <h3>
            <span>Total</span>
            <img src={Total} alt="Imagem de Total" />
          </h3>
          <p id="totalDisplay">R$ 0,00</p>
        </div>
      </section>
      <section id="transaction">
        <h2 className="sr-only">Transações</h2>

        <a href="#"  className="button new"
          >+ Nova Transação</a
        >

        <table id="data-table">
          <thead>
            <tr>
              <th className="description">Descrição</th>
              <th className="expense">Valor</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>

          <tbody></tbody>
        </table>
      </section>
    </main>
    <div className="modal-overlay">
      <div className="modal">
        <div className="form">
          <h2>Nova Transação</h2>

          <form action="" >
            <div className="input-group">
              <label className="sr-only" >Descrição</label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Descrição"
              />
            </div>
            <div className="input-group">
              <label className="sr-only" >Valor</label>
              <input
                type="number"
                id="amount"
                name="amount"
                step="0.01"
                placeholder="0,00"
              />

              <small className="help"
                >Use o sinal - (negativo) para despesas e , (vírgula) para casas
                decimais</small
              >
            </div>
            <div className="input-group">
              <label className="sr-only" >Data</label>
              <input type="date" id="date" name="date" />
            </div>

            <div className="input-group actions">
              <a href="#" className="button cancel"
                >Cancelar</a
              >
              <button>Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    </>
  );
}

export default App;
