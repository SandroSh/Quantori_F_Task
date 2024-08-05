import { ChangeEvent, useState } from 'react';
import { Form, InputDiv, MainContainer } from './Login.style'
type Inputs = {
  name: string;
  password: string;
}
const Login = () => {
  const [user, setUser] = useState(0);
  const [inputValues, setInputValues] = useState<Inputs>({ name: '', password: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type == 'text') {
      setInputValues({ ...inputValues, name: e.target.value.trim() })
    } else {
      setInputValues({ ...inputValues, password: e.target.value.trim() })
    }
    console.log(inputValues)
  }

  const handleClick = () => {
      
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
          <input required type="password" onChange={(e) => handleChange(e)} />
          <label >Enter Password</label>
        </InputDiv>
        <button onClick={handleClick}>Sign in</button>
      </Form>

    </MainContainer>
  )
}

export default Login