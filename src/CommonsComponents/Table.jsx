import React, { useState } from "react";
import { Table, Button, message } from "antd";
import EditableForm from "./Form";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;

  max-width: 90;
  table-layout: fixed;
  //background-color: yellow;
`;

const CommonTable = ({
  columns,
  dataSource,
  onDelete,
  onAddData,
  onEditData,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  const onEditButton = (record) => {
    setIsEditing(true);
    setEditingRecord(record);
  };

  const onCancel = () => {
    setIsEditing(false);
    setEditingRecord(null);
  };

  const onOk = (editedData) => {
    onEditData(editedData);
    setIsEditing(false);
    setEditingRecord(null);
    message.success("Record updated successfully!");
  };

  return (
    <div>
      {/* <Button type="primary" onClick={onAddData}>
        Add New Data
      </Button> */}

      <TableWrapper>
        <Table
          columns={[
            ...columns,
            {
              title: "Actions",
              key: "actions",
              render: (text, record) => (
                <div style={{ display: "flex" }}>
                  <EditOutlined onClick={() => onEditButton(record)} />
                  <DeleteOutlined
                    style={{ color: "red", marginLeft: 10 }}
                    onClick={() => onDelete(record)}
                  />
                </div>
              ),
            },
          ]}
          dataSource={dataSource.map((item, index) => ({
            ...item,
            ID: item.ID || index,
          }))}
          rowKey="ID"
        />
      </TableWrapper>

      {isEditing && (
        <EditableForm
          visible={isEditing}
          onCancel={onCancel}
          onOk={onOk}
          columns={columns}
          record={editingRecord}
          dataSource={dataSource}
        />
      )}
    </div>
  );
};

export default CommonTable;
