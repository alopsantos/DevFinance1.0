import styled from "styled-components";

export const CardStatus = styled.div`
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  color: var(--dark-blue);

  h3 {
    font-weight: normal;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 1rem;
  }

  &&.positivo {
    background: #49aa26;
    color: #fff;
  }

  &&.negativo {
    background: #e92929;
    color: #fff;
  }
`;
