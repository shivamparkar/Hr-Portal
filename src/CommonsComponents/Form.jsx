import React, { useState, useEffect } from "react";
import { Modal, Input, DatePicker, Form as AntForm, message, Select } from "antd";
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
  const getInputField = (column, formValues, setFormValues) => {
    const value = formValues?.[column.dataIndex];
    const placeholderText = value ? value : "No Data";

    // Handle DatePicker type
    if (
      column.type === "datepicker" &&
      value &&
      moment(value, "YYYY-MM-DD", true).isValid()
    ) {
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
            placeholder={placeholderText}
          />
        </AntForm.Item>
      );
    }

    // Handle Dropdown type (for Priority, Status, etc.)
    if (column.type === "dropdown") {
      const options =
        column.dataIndex === "Priority"
          ? ["Low", "Medium", "High"]
          : column.dataIndex === "Status"
            ? ["Not Started", "In Progress", "Completed"]
            : [];

      return (
        <AntForm.Item
          name={column.dataIndex}
          key={column.dataIndex}
          label={column.title}
          rules={[
            { required: false, message: `Please select ${column.title}` },
          ]}
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

    // Handle Input type (for general text fields like TaskName)
    if (column.type === "input") {
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
    }
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
