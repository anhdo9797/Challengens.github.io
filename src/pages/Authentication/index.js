import React, { useState } from "react";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { Row, Col, Input, Form, Tabs, Select, Button, Alert } from "antd";
import { useHistory } from "react-router-dom";
import ReactLoading from "react-loading";

import MyForm from "../../Components/Form";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import actionAuth from "../../Store/Authentication/action";

const labelStyle = {
  fontWeight: "300",
  color: "#757c8a",
};

const checkPassword = (password) => {
  const check = !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password);
  if (password.length > 7 && check) {
    console.log(!/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password));
    return true;
  }

  return false;
};

const Authentication = ({ props }) => {
  const [select, setSelect] = useState("1");

  // input for sign in
  const [inputSI, setInputSI] = useState({
    email: "",
    password: "",
  });

  //input for sign up
  const [inputSU, setInputSU] = useState({
    email: "",
    password: "",
  });
  const [activeKey, setActiveKey] = useState();
  // const [loading, setLoading] = useState(true);

  //redux
  let dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const signUp = () => {
    dispatch(actionAuth.signUp(inputSU));
  };

  const signIn = () => {
    dispatch(actionAuth.signUp(inputSU));
  };

  return (
    <div className="authentication">
      <div className="wrapInputImage">
        <h1>{select == "1" ? "Sign Up" : "Sign In"} </h1>

        <Tabs
          defaultActiveKey="2"
          onChange={(key) => setSelect(key)}
          activeKey={activeKey}
        >
          {/* sign up */}
          <Tabs.TabPane
            tab="Sign Up"
            key="1"
            style={{ justifyContent: "center" }}
          >
            <Form layout="vertical">
              <MyForm
                labelType="Email ID"
                value={inputSU.email}
                type="Email"
                onChange={(text) =>
                  setInputSU({
                    ...inputSU,
                    email: text.target.value,
                  })
                }
                placeholder="Email"
                error={
                  inputSU.email.length > 0 &&
                  inputSU.email.indexOf("@gmail.com") == -1
                    ? "Please enter the correct email"
                    : null
                }
              />
              <MyForm
                labelType="Password"
                value={inputSU.password}
                type="password"
                onChange={(text) =>
                  setInputSU({
                    ...inputSU,
                    password: text.target.value,
                  })
                }
                placeholder="Password"
                error={
                  inputSU.password.length > 0 &&
                  checkPassword(inputSU.password) == false
                    ? "Invalid password"
                    : null
                }
              />
              <Form.Item
                label={<label style={labelStyle}>Phone Number</label>}
                name="layout"
              >
                <Input.Group compact>
                  <Select
                    defaultValue="VN"
                    style={{ width: "20%" }}
                    listItemHeight={40}
                  >
                    <Option value="VN">+84</Option>
                    <Option value="US">+44</Option>
                  </Select>
                  <Input
                    placeholder="Phone number"
                    style={{ width: "80%", borderRadius: 0 }}
                    className="inputStyle"
                  />
                </Input.Group>
              </Form.Item>
            </Form>
            {loading ? (
              <ReactLoading
                type={"bubbles"}
                color={"blue"}
                height={20}
                width={"20%"}
              />
            ) : null}
            <Button className="buttonComplete" onClick={signUp}>
              Sign Up
            </Button>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Sign In" key="2">
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              layout={"vertical"}
            >
              <MyForm
                labelType="Email ID"
                value={inputSI.email}
                type="Email"
                onChange={(text) =>
                  setInputSI({
                    ...inputSI,
                    email: text.target.value,
                  })
                }
                placeholder="Email"
                error={
                  inputSI.email.length > 0 &&
                  inputSI.email.indexOf("@gmail.com") == -1
                    ? "Please enter the correct email"
                    : null
                }
              />

              <MyForm
                labelType="Password"
                value={inputSI.password}
                type="password"
                onChange={(text) =>
                  setInputSI({
                    ...inputSI,
                    password: text.target.value,
                  })
                }
                placeholder="Password"
                error={
                  inputSI.password.length > 0 &&
                  checkPassword(inputSI.password) == false
                    ? "Invalid password"
                    : null
                }
              />
            </Form>

            {loading ? (
              <ReactLoading
                type={"bubbles"}
                color={"blue"}
                height={20}
                width={"20%"}
              />
            ) : null}
            {loading ? (
              <ReactLoading
                type={"bubbles"}
                color={"blue"}
                height={20}
                width={"20%"}
              />
            ) : null}
            <Button className="buttonComplete" onClick={signIn}>
              Sign In
            </Button>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Authentication;
