import { useSelector } from "react-redux"
import { MainContainer } from "../Login/Login.style"
import { RootState } from "../../state/store"
import { ProfileInfoDiv } from "./Home.style";
import BackgroundImage from '../../assets/background2.png'



const Home = () => {
  const userData = useSelector((state: RootState) => state.userData);

  return (
    <MainContainer $imageUrl={BackgroundImage}>
      <ProfileInfoDiv>
      <h2>{userData.firstName} {userData.lastName}</h2>
      <h2>{userData.gender}</h2>
      </ProfileInfoDiv>
    </MainContainer>
  )
}

export default Home