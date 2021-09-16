import { Form, Input, Button, Checkbox, DatePicker } from "antd";
import "./antform.css";
import { useHistory } from "react-router-dom";
import { Space } from "antd";
import { useState } from "react";

export default function Antform() {
  const [state, setState] = useState({});

  const onFinish = (value) => {
    console.log("Success:");
    console.table(value);
    const values = {
      ...value,
      Birthday: value["Birthday"].format("YYYY-MM-DD"),
    };
    console.table(values);
    alert("user registered click on next");
    setState(values);
  };
  const history = useHistory();

  function handleClick(path) {
    console.log("here");
    console.table(state);
    history.push(path, state);
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className="center"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: "Please input your Email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Birthday"
        name="Birthday"
        rules={[
          {
            required: true,
            message: "Please input your Birthday",
          },
        ]}
      >
        <DatePicker style={{ width: "100%" }} />

        {/* <Input.Date/> */}
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Space size="middle">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button
            htmlType="button"
            onClick={() => handleClick("antAdditionaldetails")}
          >
            Next
          </Button>{" "}
        </Space>
      </Form.Item>
    </Form>
  );
}
