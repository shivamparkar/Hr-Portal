import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BadgeSharpIcon from "@mui/icons-material/BadgeSharp";
import FeaturedPlayListSharpIcon from "@mui/icons-material/FeaturedPlayListSharp";
import PointOfSaleSharpIcon from "@mui/icons-material/PointOfSaleSharp";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SettingsIcon from '@mui/icons-material/Settings';


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
 // background-color: yellow;
`;

const SettingWrapper = styled.div`
background-color: #f2dbf0;
//padding: 10px;
margin-top: 0px;
//height: 70px;
padding: 12px 0;
`;





const Links = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 13px;
  //background-color: blue;
  margin-right: 10px; 
`;

const LinkItem = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-size: 14px;
  font-weight: 1rem;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 10px 12px;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #b090b4;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  font-size: 90px;
  line-height: 25px;
  border-bottom-right-radius: 12px;
  width: 92%;
  margin-left: 0;
  background-color: purple;
  height: 48px;
  margin-top: -16px;
`;

const Logo = styled.div`
  font-size: 25px;
  font-weight: bold;
  white-space: nowrap;
`;

export const Sidebar = () => {
  return (
    <div>
      <NavigationBar>
        <LogoWrapper>
          <Logo>
            <span>HR Portal</span>
          </Logo>
        </LogoWrapper>
        <Wrapper>
          <Links>
            <LinkItem to="/dashboard">
              <DashboardIcon style={{ fontSize: 24 }} /> Dashboard
            </LinkItem>
            <LinkItem to="/employee-management">
              <BadgeSharpIcon style={{ fontSize: 24 }} /> Employee Management
            </LinkItem>
            <LinkItem to="/attendance">
              <FeaturedPlayListSharpIcon style={{ fontSize: 24 }} /> Attendance
            </LinkItem>
            <LinkItem to="/payroll">
              <PointOfSaleSharpIcon style={{ fontSize: 24 }} /> Payroll
            </LinkItem>
            <LinkItem to="/performance-management">
              <ManageAccountsSharpIcon style={{ fontSize: 24 }} /> Performance
              Management
            </LinkItem>
            <LinkItem to="/recruitment">
              <WorkOutlineIcon style={{ fontSize: 24 }} /> Recruitment
            </LinkItem>
          </Links>
        </Wrapper>
        {/* <SettingWrapper>
  <SettingsIcon style={{ fontSize: "44px", marginLeft: "14px", margintop: "27px", cursor:"pointer" }} />
   
</SettingWrapper> */}

      </NavigationBar>
    </div>
  );
};
