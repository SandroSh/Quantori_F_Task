import styled from "styled-components";

export const NavbarDiv = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;
  padding: 7px 30px 0px 30px;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.5);
  width: 95%;
  height: 80px;
  border-radius: 12px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
  @media screen and (max-width: 850px) {
    justify-content: space-between;
    z-index:5;
  }
`;

export const List = styled.ul<{ $isOpen?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  a {
    text-decoration: none;
    color: black;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: center;
    top: 0;
    left: ${(props) => (props.$isOpen ? "0" : "-110%")};
    margin: 0;
    padding: 80px 0 30px 0;
    position: absolute;
    background: rgba(255, 255, 255, 0);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: 1s;
  }
`;
export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
export const BurgerIconsDiv = styled.div`
  z-index: 5;
  img {
    display: none;
  }
  @media (max-width: 850px) {
    img {
      cursor: pointer;
      display: unset;
    }
  }
`;

export const ProfileDiv = styled.div`
  z-index: 5;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  @media (max-width: 850px) {
    img {
    }
  }
`;

export const ListItem = styled.li<{ $isActive?: boolean }>`
  margin: 0 20px;
  font-size: 20px;
  text-decoration: ${(props) => (props.$isActive ? "underline wavy #5500ff" : "none")};
  
  p{
    cursor:pointer;
  }
  @media (max-width: 850px) {
    margin: 20px 0;
    font-size: 28px;
  }
`;
