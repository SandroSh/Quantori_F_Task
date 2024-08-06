import { ChangeEvent, MouseEvent, useState } from 'react';
import { Form, InputDiv, MainContainer } from './Login.style'
type Inputs = {
  name: string;
  password: string;
}
interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  refreshToken: string;
}
const Login = () => {
  const [user, setUser] = useState<User>();
  const [inputValues, setInputValues] = useState<Inputs>({ name: '', password: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    if (e.target.type == 'text') {
      setInputValues({ ...inputValues, name: e.target.value.trim() })
    } else {
      setInputValues({ ...inputValues, password: e.target.value.trim() })
    }

  }

  const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    console.log("Clicked")
    logUser();
  }

  const logUser = async () => {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: inputValues.name,
        password: inputValues.password,
        expiresInMins: 60,
      })
    }).then(res => res.json());

    setUser(response);
    console.log(user)
  }
  return (
    <MainContainer>
      <Form>
        <p>Login</p>
        <InputDiv>
          <input required type="text" onChange={(e) => handleChange(e)} />
          <label>Enter Username</label>
        </InputDiv>
        <InputDiv>
          <input required type="password" onChange={(e) => handleChange(e)}/>
          <label >Enter Password</label>
        </InputDiv>
        <button onClick={(e) => handleClick(e)}>Sign in</button>
      </Form>
    </MainContainer>
  )
}

export default Login