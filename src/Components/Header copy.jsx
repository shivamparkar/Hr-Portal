import React from "react";
import styled from "styled-components";
import { LogoutOutlined  , BellFilled } from "@ant-design/icons";
import DarkMode from "../CommonsComponents/DarkMode";
import { Avatar, Badge, Space } from "antd";

const Head = styled.div`
  overflow: hidden;
  background: linear-gradient(to right, #4db8b8, #00b3b3);
  padding: 20px 10px;
  position: fixed;
  top: 0;
  width: 79%;
  //width: 100%;
  z-index: 10;
  border-bottom-left-radius: 12px;
  height: 19px;
`;

const ImageWrapper = styled.div`
  float: left;
  color: #ffffff;
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
          <Badge count={10} style={{ fontSize: '10px' }}>
          <BellFilled style={{ fontSize: '20px' }}/>
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
