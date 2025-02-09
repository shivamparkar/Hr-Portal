import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Users from "../Data/user";
import LoginImg from "../Images/Login.jpg";
import { Input as AntInput, Button, Checkbox, Form, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { theme, Grid } from "antd";

const { useToken } = theme;
const { Text, Title, Link } = Typography;
const { useBreakpoint } = Grid;

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
  height: auto;
  border: 1px solid black;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background-color: #b2b2b2;
`;

const TitleWrapper = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  color: #000000;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 20px 0px 20px;
`;

const styles = {
  forgotPassword: {
    float: "right",
  },
  footer: {
    marginTop: 20,
    textAlign: "center",
    width: "100%",
  },
};

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const { token } = useToken();
  const screens = useBreakpoint();

  const [users, setUsers] = useState(Users);
  const [formData, setFormData] = useState({ email: "", password: "", remember: true });

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

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
        <TitleWrapper>
          <Title>Sign in</Title>
          <Text>Welcome back! Please enter your details below to sign in.</Text>
        </TitleWrapper>

        <Wrapper>
          <Form
            name="login_form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
            requiredMark="optional"
            onSubmit={submitForm}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <AntInput
                prefix={<MailOutlined />}
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <AntInput.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item>
              <Checkbox
                name="remember"
                checked={formData.remember}
                onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
              >
                Remember me
              </Checkbox>
              <a style={styles.forgotPassword} href="">
                Forgot password?
              </a>
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Log in
              </Button>

              <div style={styles.footer}>
                <Text>Don't have an account? </Text>
                <Link href="" onClick={() => navigate("/register")}>
                  Sign up now
                </Link>
              </div>
            </Form.Item>
          </Form>
        </Wrapper>
      </Container>
    </ParentContainer>
  );
};

export default Login;
