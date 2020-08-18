import React, { useState } from "react";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { Row, Col, Input, Form, Tabs, Select, Button } from "antd";
import { useHistory } from "react-router-dom";

import lap from "./assets/lap.png";
import visa from "./assets/visa.png";

import MyForm from "../../Components/Form";
import "./styles.scss";

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

  let history = useHistory();
  const goHome = () => {
    history.push("/home");
  };

  return (
    <div className="authentication">
      <div className="wrapInputImage">
        <Row style={{ padding: 0 }} justify="space-between">
          <Col className="input" xs={24} lg={11}>
            <h1>{select == "1" ? "Sign Up" : "Sign In"} </h1>
            {/* sign up */}
            <Tabs defaultActiveKey="2" onChange={(key) => setSelect(key)}>
              <Tabs.TabPane tab="Sign Up" key="1">
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
                        style={{
                          width: "30%",
                          fontSize: 14,
                          height: 40,
                        }}
                      >
                        <Option value="VN">+84</Option>
                        <Option value="US">+44</Option>
                      </Select>
                      <Input
                        placeholder="Phone number"
                        style={{ width: "70%" }}
                        className="inputStyle"
                      />
                    </Input.Group>
                  </Form.Item>

                  <Form.Item
                    label={<label style={labelStyle}>Credit Card Info</label>}
                    name="layout"
                  >
                    <Input.Group compact>
                      <Select style={{ width: "20%" }} defaultValue="VS">
                        <Option value="VS">
                          <img src={visa} width="22" height="14" />
                        </Option>
                      </Select>
                      <Input style={{ width: "20%" }} defaultValue="0000" />
                      <Input style={{ width: "20%" }} defaultValue="0000" />
                      <Input style={{ width: "20%" }} defaultValue="0000" />
                      <Input style={{ width: "20%" }} defaultValue="0000" />
                    </Input.Group>
                  </Form.Item>
                </Form>

                <Button className="buttonComplete">Sign Up</Button>
              </Tabs.TabPane>

              {/* Sign In */}
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

                <Button className="buttonComplete" onClick={goHome}>
                  Sign In
                </Button>
              </Tabs.TabPane>
            </Tabs>
          </Col>
          <Col xs={0} lg={11} className="colImage">
            <img src={lap} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Authentication;
