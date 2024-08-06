import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("src/assets/backgroundImage2.png");
  background-repeat:no-repeat;
  background-size:cover;
`;

export const Form = styled.form`
  margin: 20px;
  background-color: #ffffff;
  box-shadow: 0 15px 25px rgba(255, 255, 255, 0.7);
  width: 350px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 25px;
  border-radius: 8px;
  p {
    font-size: 28px;
    font-weight: 800;
  }

  button {
    margin-top: 30px;
    height: 55px;
    background: #f2f2f2;
    border-radius: 11px;
    border: 0;
    outline: none;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    background: linear-gradient(180deg, #363636 0%, #1b1b1b 50%, #000000 100%);
    box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #000000;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #0000003a;
    }
  }
`;

export const InputDiv = styled.div`
  position: relative;
  width: 100%;
  input {
    margin-top: 15px;
    width: 100%;
    outline: none;
    border-radius: 8px;
    height: 45px;
    border: 1.5px solid #ecedec;
    background: transparent;
    padding-left: 10px;
    &:focus {
      border: 1.5px solid black;
    }

    &:focus ~ label,
    &:valid ~ label {
      top: 5px;
      left: 5px;
      font-size: 12px;
      color: #000;
      background-color: #ffffff;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
  label {
    position: absolute;
    top: 25px;
    left: 15px;
    color: #ccc;
    transition: all 0.3s ease;
    pointer-events: none;
    z-index: 2;
  }
`;
