import React from 'react'
import CommonTable from "../../CommonsComponents/Table";
import styled from 'styled-components';
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

import {columns} from '../Payroll/index';

const { TabPane } = Tabs;

const Container = styled.div`
  width: 95.9%;
  height: auto;
  padding: 20px;
  margin-top: 70px;
  position: sticky;
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

  z-index: 10;
  color: black;
`;

const Wrapper = styled.div`
  height: 50%;
  justify-content: center;
  align-items: center;
  padding: 1px 20px;
`;

const StickyTabs = styled(Tabs)`
  position: sticky;
  top: 40px;
  z-index: 5;
`;


const Payroll = () => {

  const items = [
    {
      key: "1",
      label: "Base Salary",
      children: <CommonTable columns={columns}  />,
    },
    {
      key: "2",
      label: "Leave Requests",
      children: (''),
    },
    // {
    //   key: "3",
    //   label: "Late Arrival and Early Leave Tracking",
    //   children: "",
    // },
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
        <StickyTabs
          defaultActiveKey="1"
          tabBarStyle={{
            //  color: 'red',
            fontWeight: "bold",
          }}
          tabBarExtraContent={{
            style: {
              color: "green",
            },
          }}
        >
          {items.map((item) => (
            <TabPane tab={item.label} key={item.key}>
              {item.children}
            </TabPane>
          ))}
        </StickyTabs>
      </Wrapper>
    </Container>
  )
}

export default Payroll