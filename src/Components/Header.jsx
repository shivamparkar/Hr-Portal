import React from "react";
import styled from "styled-components";
import { LogoutOutlined , NotificationTwoTone , BellOutlined} from "@ant-design/icons";
import DarkMode from "../CommonsComponents/DarkMode";
import { Avatar, Badge, Space } from "antd";

const Head = styled.div`
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
  position: fixed;
  top: 0;
  //width: 79%;
  width: 100%;
  z-index: 10;
`;

const ImageWrapper = styled.div`
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  margin-left: 250px;
  padding-top: 0px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 0px 25px 0px 0px;
`;

const Links = styled.div`
  justify-content: space-around;
  margin-left: 10px;
  cursor: pointer;
`;

const Logo = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <Head>
      <ImageWrapper>
        {/* <Logo>
          <span>HR Portal</span>
        </Logo> */}
      </ImageWrapper>
      <Wrapper>
        {/* <Links>
          <DarkMode />
        </Links> */}

        <Links>
          <Badge count={5}>
          <BellOutlined />
          </Badge>
        </Links>

        <Links>
          <LogoutOutlined />
        </Links>
      </Wrapper>
    </Head>
  );
};

export default Header;
