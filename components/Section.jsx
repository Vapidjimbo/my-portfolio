import { Row, Col, Divider } from "antd";
import React, { useState, useEffect } from "react";

export default function Section({ title, children, isOdd }) {
  const [bgColor, setbgColor] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    if (isOdd) {
      setbgColor("white");
      setColor("black");
    } else {
      setbgColor("#F0F2F5");
      setColor("black");
    }
  }, [isOdd]);
  
  return (
    <section style={{ backgroundColor: bgColor, color: color, padding: "1em" }}>
      <Divider style={{ color: color }} orientation="left">
        {title}
      </Divider>
      <Row>
        <Col
          span={6}
          xs={{ order: 1 }}
          sm={{ order: 2 }}
          md={{ order: 3 }}
          lg={{ order: 4 }}
        >
          {children[0]}
        </Col>
        <Col
          span={6}
          xs={{ order: 2 }}
          sm={{ order: 1 }}
          md={{ order: 4 }}
          lg={{ order: 3 }}
        >
          {children[1]}
        </Col>
        <Col
          span={6}
          xs={{ order: 3 }}
          sm={{ order: 4 }}
          md={{ order: 2 }}
          lg={{ order: 1 }}
        >
          {children[2]}
        </Col>
        <Col
          span={6}
          xs={{ order: 4 }}
          sm={{ order: 3 }}
          md={{ order: 1 }}
          lg={{ order: 2 }}
        >
          {children[3]}
        </Col>
      </Row>
    </section>
  );
}
