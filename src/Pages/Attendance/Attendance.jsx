import React from "react";
import styled from "styled-components";
import { HomeOutlined, ReconciliationOutlined } from "@ant-design/icons";
import {
  Tabs,
  Breadcrumb,
  Form as AntForm,
  Input,
  Button,
  message,
  Form,
  Select,
  DatePicker,
  Upload,
  Modal,
} from "antd";

import { columns, dataSource } from "./index";

import CommonTable from "../../CommonsComponents/Table";

const { TabPane } = Tabs;

const Container = styled.div`
  width: 95.9%;
  height: auto;
  padding: 20px;
  margin-top: 70px;
  position: sticky;
  //background-color: teal;
`;

const BreadCrumb = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 25px;
  margin-top: -25px;
  margin-bottom: 2px;
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
  // background-color: black;

  z-index: 10;
  color: black;
`;

const Wrapper = styled.div`
  height: 99%;
  justify-content: center;
  align-items: center;
  padding: 1px 20px;
  // background-color: green;
`;

const StickyTabs = styled(Tabs)`
  position: sticky;
  top: 40px;
  z-index: 5;
  //background-color: #fff;
`;

const Attendance = () => {
  const items = [
    {
      key: "1",
      label: "Employee Attendance List",
      children: (
        <CommonTable
          columns={columns}
          dataSource={dataSource}
          // onDelete={onDeleteData}
          // onAddData={onAddData}
          // onEditData={onEditData}
        />
      ),
    },
    {
      key: "2",
      label: "Leave Requests",
      children: "",
    },
    {
      key: "3",
      label: "Late Arrival and Early Leave Tracking",
      children: "",
    },
  ];

  return (
    <Container>
      <BreadCrumb>
        <Breadcrumb
          items={[
            {
              title: (
                <a
                  href="/dashboard"
                  style={{
                    color: "black",
                  }}
                >
                  <HomeOutlined /> DashBoard
                </a>
              ),
            },
            {
              title: (
                <a
                  href=""
                  style={{
                    color: "black",
                  }}
                >
                  <ReconciliationOutlined /> Attendance
                </a>
              ),
            },
          ]}
        />
      </BreadCrumb>

      <Wrapper>
        <StickyTabs defaultActiveKey="1">
          {items.map((item) => (
            <TabPane tab={item.label} key={item.key}>
              {item.children}
            </TabPane>
          ))}
        </StickyTabs>
      </Wrapper>
    </Container>
  );
};

export default Attendance;
