import React, { useState } from "react";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import "./styles.scss";
import { Row, Col, Input } from "antd";

import lap from "./assets/lap.png";

const Authentication = () => {
  return (
    <div className="authentication">
      <div className="wrapInputImage">
        <Row>
          <Col className='input' xs={24} lg={11}>
            <h1>Sign In</h1>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
          </Col>
          <Col xs={0} lg={11}>
            <img src={lap} width="100%" height="auto" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Authentication;
