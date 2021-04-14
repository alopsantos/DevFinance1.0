import React from "react";

import { ModalOverlay, Form } from "./style";
const Modal = ({ onClose = () => {} }) => {
  return (
    <ModalOverlay>
      <div className="modal">
        <div className="form">
          <h2>Nova Transação</h2>
          <Form>
            <div className="input-group">
              <label className="sr-only">Descrição</label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Descrição"
              />
            </div>
            <div className="input-group">
              <label className="sr-only">Valor</label>
              <input
                type="number"
                id="amount"
                name="amount"
                step="0.01"
                placeholder="0,00"
              />

              <small className="help">
                Use o sinal - (negativo) para despesas e , (vírgula) para casas
                decimais
              </small>
            </div>
            <div className="input-group">
              <label className="sr-only">Data</label>
              <input type="date" id="date" name="date" />
            </div>

            <div className="input-group actions">
              <a href="#" onClick={onClose} className="button cancel">
                Cancelar
              </a>
              <button>Salvar</button>
            </div>
          </Form>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default Modal;
