import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10%;

  h1 {
    font-family: "CoreCircus", sans-serif;
    font-size: 2vw;
    text-align: center;
    color: #ffcc00;
    letter-spacing: 0rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 50%;
    width: 100%;

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 70%;

        input,
        select {
          font-size: 1.5em;
          border-radius: 5px;
          background: #ffcc00;
          color: rgba(45, 45, 45, 1);
          padding: 2%;
          width: 70%;
          &:focus {
            outline: none;
          }
        }

        span {
          font-size: 1.5em;
          border-radius: 5px;
          color: #ffcc00;
        }
      }
    }
  }

  button {
    font-size: 1.5em;
    border-radius: 5px;
    background: #ffcc00;
    color: rgba(45, 45, 45, 1);
    padding: 1%;
    &:focus {
      outline: none;
    }
  }
`;
