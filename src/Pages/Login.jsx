import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Users from "../Data/user";
import LoginImg from "../Images/Login.jpg";

const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${LoginImg});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  width: 290px;
  height: 400px;
  border: 1px solid black;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background-color: #d66fdf;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  color: #000000;
`;

const Input = styled.input`
  width: 85%;
  padding: 10px;
  margin-top: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
  text-align: center;
  color: black;
  &::placeholder {
    color: black;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 20px 0px 20px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #006d04;
  color: white;
  border: none;
  cursor: pointer;
  width: 40%;
  border-radius: 20px;
  margin-bottom: 0px;
  margin-top: 31px;
`;

const LinkButton = styled.button`
  padding: 10px;
  background-color: transparent;
  color: #000000;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 0px;
`;

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const [users, setUsers] = useState(Users);
  //console.log(Users);
  

  const [formData, setFormData] = useState({ email: "", password: "" });

  const submitForm = (e) => {
    e.preventDefault();

    const userFound = users.find(
      (user) =>
        user.Email === formData.email && user.Password === formData.password
    );

    if (userFound) {
      
      onLogin();
      navigate("/dashboard");
    } else {
      alert("Invalid email or password.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <ParentContainer>
      <Container>
        <Title>Login</Title>
        <Wrapper>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button onClick={submitForm}>Login</Button>
          <LinkButton onClick={() => navigate("/register")}>
            Don't have an account?
          </LinkButton>
        </Wrapper>
      </Container>
    </ParentContainer>
  );
};

export default Login;
