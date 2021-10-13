import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 40%;
    width: 90%;

    div {
      height: 40%;

      input {
        font-size: 1.5em;
        border-radius: 5px;
        background: #ffcc00;
        color: rgba(45, 45, 45, 1);
        padding: 1%;
        width: 70%;
        outline: none;
        &:focus {
          outline: none;
        }
      }
    }

    select,
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

    select:focus > option:hover {
      background: #000 !important;
    }

    span {
      font-size: 1.5em;
      border-radius: 5px;
      color: #ffcc00;
    }
  }
`;
