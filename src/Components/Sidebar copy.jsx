import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  DashboardFilled,
  IdcardFilled,
  ProfileFilled,
  MoneyCollectFilled,
  FundFilled,
  SlidersFilled,
} from "@ant-design/icons";

import HrTransparent from "../Images/HRTransparent.png";

const NavigationBar = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #f1f1f1;

  overflow-x: hidden;
  padding-top: 16px;
`;

const Wrapper = styled.div`
  padding: 20px 10px 10px 10px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-align: center;
  padding: 10px;
  font-size: 90px;
  line-height: 25px;
  border-bottom-right-radius: 12px;
  width: 92%;
  margin-left: 0;
  background-color: teal;
  height: 40px;
  margin-top: -16px;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
`;

const CustomMenu = styled(Menu)`
  background-color: #f1f1f1;
  border-right: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .ant-menu-item {
    font-size: 15px;
    color: #000000;
    padding: 12px 20px;
    border-radius: 8px;
    margin-bottom: 18px;
    //background-color: blue;

    &:hover {
      background-color: #228484;
      color: #000000;
      border-radius: 10px;
    }

    a {
      color: inherit;
    }

    .anticon {
      color: #065151;
      font-size: 18px;
      margin-right: 10px;
    }
  }

  .ant-menu-item-selected {
    background-color: teal;
    color: #ffffff;
    border-radius: 10px;

    .anticon {
      color: white;
    }
  }

  .ant-menu-item-active {
    background-color: #4ec3b7;
    color: #ffffff;
    border-radius: 10px;

    .anticon {
      color: #ffffff;
    }
  }
`;

export const Sidebar = () => {
  return (
    <div>
      <NavigationBar>
        <LogoWrapper>
          <Logo>
            <img
              src={HrTransparent}
              style={{ height: "100px", width: "100px" }}
            />
          </Logo>
        </LogoWrapper>
        <Wrapper>
          <CustomMenu mode="inline">
            <Menu.Item
              key="dashboard"
              icon={<DashboardFilled style={{ fontSize: 21 }} />}
            >
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item
              key="employee-management"
              icon={<IdcardFilled style={{ fontSize: 24 }} />}
            >
              <Link to="/employee-management">Staffing</Link>
            </Menu.Item>
            <Menu.Item
              key="attendance"
              icon={<ProfileFilled style={{ fontSize: 24 }} />}
            >
              <Link to="/attendance">Attendance</Link>
            </Menu.Item>
            <Menu.Item
              key="payroll"
              icon={<MoneyCollectFilled style={{ fontSize: 24 }} />}
            >
              <Link to="/payroll">Payroll</Link>
            </Menu.Item>
            <Menu.Item
              key="performance-management"
              icon={<FundFilled style={{ fontSize: 24 }} />}
            >
              <Link to="/performance-management">Performance</Link>
            </Menu.Item>
            <Menu.Item
              key="recruitment"
              icon={<SlidersFilled style={{ fontSize: 24 }} />}
            >
              <Link to="/recruitment">Recruitment</Link>
            </Menu.Item>
          </CustomMenu>
        </Wrapper>
      </NavigationBar>
    </div>
  );
};
