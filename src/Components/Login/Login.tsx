import { ChangeEvent, MouseEvent, useState } from 'react';
import { Button, Form, InputDiv, MainContainer } from './Login.style'
import { useNavigate } from 'react-router';
import { createUser } from '../../state/user/userSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { navbarData } from '../../constants/data';

type Inputs = {
  name: string;
  password: string;
}

const Login = () => {
  const [inputValues, setInputValues] = useState<Inputs>({ name: '', password: '' });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    if (e.target.type == 'text') {
      setInputValues({ ...inputValues, name: e.target.value.trim() })
    } else {
      setInputValues({ ...inputValues, password: e.target.value.trim() })
    }

  }

  const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();

    if (!inputValues.name || !inputValues.password) {
      toast.error('Please fill inputs');
      return;
    }
    logUser();
  }

  // Login user and creating state of recieved data
  const logUser = async () => {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: inputValues.name,
        password: inputValues.password,
        expiresInMins: 60,
      })
    }).then(res => {
      if (res.status != 200) {
        toast.error('Incorrect username or password. Please try again.');
        return;
      }
      return res.json()
    });
    if (!response) return;

    dispatch(createUser(response));
    toast.success('Successfully Logged in!');
    navbarData[0].isActive = true;
    navigate('/');

  }
  return (
    <MainContainer $imageUrl={'src/assets/backgroundImage2.png'}>
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
        <Button onClick={(e) => handleClick(e)}>Sign in</Button>
      </Form>

    </MainContainer>
  )
}

export default Login