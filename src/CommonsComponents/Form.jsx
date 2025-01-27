import React, { useState, useEffect } from "react";
import { Modal, Input, DatePicker, Form as AntForm, message , Select} from "antd";
import moment from "moment";

const EditableForm = ({
  visible,
  onCancel,
  onOk,
  columns,
  record,
  dataSource,
}) => {
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    if (record) {
      setFormValues({ ...record });
    }
  }, [record]);

  const getInputField = (column) => {
    const value = formValues?.[column.dataIndex];
    const placeholderText = value ? value : "No Data";


    if (value && moment(value, "YYYY-MM-DD", true).isValid()) {
      return (
        <AntForm.Item
          name={column.dataIndex}
          key={column.dataIndex}
          label={column.title}
          rules={[{ required: false, message: `Please enter ${column.title}` }]}
        >
          <DatePicker
            value={moment(value, "YYYY-MM-DD")}
            onChange={(date) => {
              setFormValues((prev) => ({
                ...prev,
                [column.dataIndex]: date ? date.format("YYYY-MM-DD") : null,
              }));
            }}
            style={{ width: "100%", height: "50px" }}
            // placeholder={placeholderText}
          />
        </AntForm.Item>
      );
    }

    if (value && /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(value)) {
      return (
        <AntForm.Item
          name={column.dataIndex}
          label={column.title}
          rules={[
            {
              required: true,
              // type: "email",
              // message: "Please enter a valid email address!",
            },
          ]}
        >
          <Input
            value={value}
            onChange={(e) => {
              setFormValues((prev) => ({
                ...prev,
                [column.dataIndex]: e.target.value,
              }));
            }}
            placeholder={placeholderText}
            defaultValue={value}
          />
        </AntForm.Item>
      );
    }

    if (column.type === "dropdown") {
      const options = column.dataIndex === "Priority" 
        ? ["High", "Medium", "Low"] 
        : column.dataIndex === "Status" 
        ? ["Not Started", "In Progress", "Completed"] 
        : [];
  
      return (
        <AntForm.Item
          name={column.dataIndex}
          label={column.title}
          rules={[{ required: false, message: `Please select ${column.title}` }]}
        >
          <Select
            value={value}
            onChange={(selectedValue) => {
              setFormValues((prev) => ({
                ...prev,
                [column.dataIndex]: selectedValue,
              }));
            }}
            placeholder={placeholderText}
          >
            {options.map((option) => (
              <Select.Option key={option} value={option}>
                {option}
              </Select.Option>
            ))}
          </Select>
        </AntForm.Item>
      );
    }

    return (
      <AntForm.Item
        name={column.dataIndex}
        label={column.title}
        rules={[{ required: false, message: `Please enter ${column.title}` }]}
      >
        <Input
          value={value}
          onChange={(e) => {
            setFormValues((prev) => ({
              ...prev,
              [column.dataIndex]: e.target.value,
            }));
          }}
          placeholder={placeholderText}
        />
      </AntForm.Item>
    );
  };

  return (
    <Modal
      title="Edit Record"
      visible={visible}
      onCancel={onCancel}
      onOk={() => {
        onOk(formValues);
        // message.success("Form submitted successfully!");
      }}
    >
      <AntForm layout="vertical" disabled={false}>
        {columns.map((column) => {
          if (column.dataIndex !== "actions" && column.dataIndex !== "ID") {
            return getInputField(column);
          }
          return null;
        })}
      </AntForm>
    </Modal>
  );
};

export default EditableForm;
