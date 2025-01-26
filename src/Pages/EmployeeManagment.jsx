import React, { useState } from "react";
import styled from "styled-components";
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
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import Flag from "react-world-flags";
import { UploadOutlined } from "@ant-design/icons";
import CommonTable from "../CommonsComponents/Table";
import table, { Tablecolumns, Employee, EmployeeData } from "../Data/table";
const { Option } = Select;
const { TabPane } = Tabs;

const countryCodes = {
  IN: { code: "91", flag: "IN" },
  BT: { code: "87", flag: "BT" },
  US: { code: "1", flag: "US" },
  CA: { code: "1", flag: "CA" },
  GB: { code: "44", flag: "GB" },
  AU: { code: "61", flag: "AU" },
};

const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

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
  height: 99%;
  justify-content: center;
  align-items: center;
  padding: 1px 20px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 300px;
  min-width: 250px;
  width: 500px;
  padding: 10px, 10px;
`;

const StickyTabs = styled(Tabs)`
  position: sticky;
  top: 40px;
  z-index: 5;
  background-color: #fff;
`;

const EmployeeManagment = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Form submitted successfully!");
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 100,
        }}
        defaultValue="91"
      >
        {Object.entries(countryCodes).map(([country, { code, flag }]) => (
          <Option value={code} key={country}>
            <Flag code={flag} style={{ width: 20, marginLeft: 10 }} />
            {`+${code}`}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );

  const [isEditing, setIsEditing] = useState(false);

  const [dataSource, setDataSource] = useState(table);

  const [columns, setColumns] = useState(Tablecolumns);

  const onDeleteData = (record) => {
    Modal.confirm({
      title: "Are You Sure You want To Delete this Order?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((prev) =>
          prev.filter((student) => student.ID !== record.ID)
        );
        message.success("Record deleted successfully!");
      },
    });
  };

  const onAddData = () => {
    const randomID = Math.floor(Math.random() * 100);
    const newData = {
      ID: randomID,
      firstName: `New Firstname ${randomID}`,
      lastName: `New Lastname ${randomID}`,
      phoneNumber: `New Lastname ${randomID}`,
      dob: `New Lastname ${randomID}`,
      joinDate: `New Lastname ${randomID}`,
      email: `New Lastname ${randomID}`,
      address: `New Address ${randomID}`,
    };
    setDataSource((prev) => [...prev, newData]);
  };

  const onEditData = (editedEmployee) => {
    debugger;
    setDataSource((prev) =>
      prev.map((employee) =>
        employee.ID === editedEmployee.ID ? editedEmployee : employee
      )
    );
    setIsEditing(false);
  };

  const items = [
    {
      key: "1",
      label: "Add Employee",
      children: (
        <FormWrapper>
          <AntForm layout="vertical" form={form} onFinish={onFinish}>
            <FormItem>
              <AntForm.Item label="First Name" name="First name">
                <Input placeholder="First name" />
              </AntForm.Item>
            </FormItem>

            <FormItem>
              <AntForm.Item label="Last Name" name="Second name">
                <Input placeholder="Last name" />
              </AntForm.Item>
            </FormItem>
            <FormItem>
              <AntForm.Item
                name="email"
                label="Email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input a valid email!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </AntForm.Item>
            </FormItem>

            <FormItem>
              <AntForm.Item
                label="Phone Number"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                />
              </AntForm.Item>
            </FormItem>

            <FormItem>
              <AntForm.Item
                label="Date Of Birth"
                name="Date Of Birth"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <DatePicker
                  style={{
                    width: "100%",
                  }}
                />
              </AntForm.Item>
            </FormItem>

            <FormItem>
              <AntForm.Item
                label="Joining Date"
                name="Joining Date"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <DatePicker
                  style={{
                    width: "100%",
                  }}
                />
              </AntForm.Item>
            </FormItem>

            <FormItem>
              <AntForm.Item
                label="Address"
                name="Address"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea rows={6} />
              </AntForm.Item>
            </FormItem>

            <FormItem
              name="upload"
              label="AddarCard / PanCard"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              required={[
                {
                  required: true,
                },
              ]}
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </FormItem>

            <Button
              type="primary"
              htmlType="submit"
              style={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          </AntForm>
        </FormWrapper>
      ),
    },
    {
      key: "2",
      label: "Employee Details",
      children: (
        <CommonTable
          columns={columns}
          dataSource={dataSource}
          onDelete={onDeleteData}
          onAddData={onAddData}
          onEditData={onEditData}
        />
      ),
    },
    {
      key: "3",
      label: "Project Assignment",
      children: (
        <CommonTable
          columns={Employee}
          dataSource={EmployeeData}
          onDelete={onDeleteData}
          onAddData={onAddData}
          onEditData={onEditData}
        />
      ),
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
                  <UserOutlined /> Employee Managment
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

export default EmployeeManagment;
