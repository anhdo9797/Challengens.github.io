import React from "react";
import { Form, Input } from "antd";
import "./form.scss";

const labelStyle = {
  fontWeight: "300",
  color: "#757c8a",
};
const MyForm = ({ labelType, value, onChange, type, placeholder, error }) => {
  return (
    <Form.Item
      label={<label style={labelStyle}>{labelType} </label>}
      name={placeholder}
      rules={[
        {
          required: true,
        },
      ]}
      className="myForm"
    >
      {type == "password" ? (
        <Input.Password
          placeholder={placeholder}
          className="inputStyle"
          value={value}
          onChange={onChange}
          style={{ border: error ? "1px solid red" : null, margin: 0 }}
        />
      ) : (
        <Input
          placeholder={placeholder}
          className="inputStyle"
          value={value}
          onChange={onChange}
          style={{ border: error ? "1px solid red" : null }}
        />
      )}
      <div style={{ height: 15, color: "red" }}>{error}</div>
    </Form.Item>
  );
};

export default MyForm;
