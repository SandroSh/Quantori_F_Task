import { Link, useNavigate } from "react-router-dom"
import { navbarData, NavItem } from "../../constants/data"
import { List, ListWrapper, NavbarDiv, BurgerIconsDiv, ProfileDiv, ListItem } from "./Navbar.style"
import OpenIcon from '../../assets/dots.svg'
import UserIcon from '../../assets/userIcon.svg'
import CloseIcon from '../../assets/close.svg'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../state/store"
import { Button } from "../Login/Login.style"
import toast from "react-hot-toast"
import { createUser, initialState } from "../../state/user/userSlice"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [navData, setNavData] = useState<NavItem[]>(navbarData);
  const user = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleToggleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleNavItemClick = (itemTitle: string) => {
    if (!user.image) return;
    setNavData(navData.map(item => {
      if (item.title === itemTitle) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
      return item;
    }))
  }

  const handleLoginClick = () => {
    dispatch(createUser(initialState));
    navbarData[0].isActive = false;
    navigate('/login');
  }
  return (
    <NavbarDiv>
      <ProfileDiv>
        <img src={user.image as string || UserIcon} alt="Profile Img" />
      </ProfileDiv>
      <List $isOpen={isOpen}>
        <ListWrapper>
          {
            navbarData.map((item, index) => {
              return (
                <ListItem $isActive={item.isActive} key={index} onClick={() => handleNavItemClick(item.title)}>
                  {user?.image ? <Link to={item.url}>{item.title}</Link> : <p onClick={() => toast('Please Sign in to have access that page\nUsername: emilys \n Password: emilyspass')}>{item.title}</p>}
                </ListItem>
              )
            })
          }
        </ListWrapper>
        <li>
          <Button style={{ margin: '-10px 0 0 0', width: '100px' }} onClick={handleLoginClick}>Log In</Button>
        </li>
      </List>

      <BurgerIconsDiv>
        <img src={isOpen ? CloseIcon : OpenIcon} alt="Navbar Icon" onClick={handleToggleClick} />
      </BurgerIconsDiv>

    </NavbarDiv>
  )
}

export default Navbar