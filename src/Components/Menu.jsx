import React from "react";
import { Menu } from "antd";
import { DashboardOutlined, HomeOutlined, PowerOffOutlined, SignpostOutlined, VerifiedUserOutlined } from "@mui/icons-material";

function Content(){
    return <div>

    </div>
}

const Menus = () => {
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <Menu
        items={[
          {
            label: "Home",
            icon: <HomeOutlined />
          },
          {
            label: "Dashboard",
            icon: <DashboardOutlined />
          },
          {
            label: "UsersList",
            icon: <VerifiedUserOutlined />
          },
          {
            label: "Profile",
            icon: <PowerOffOutlined />
          },
          {
            label: "Singout",
            icon: <PowerOffOutlined />,
            danger: true,
          },
        ]}
      ></Menu>
      <Content />
    </div>
  );
};

export default Menus;
