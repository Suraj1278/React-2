import axios from "axios";
import { Typography } from "antd";
import "./Antadditionaldetails.css";
import { InputNumber } from "antd";
import { Form, Input, Button, Checkbox, Radio } from "antd";
import "./antform.css";

import { Space } from "antd";

import { Select } from "antd";
const { Text } = Typography;
const { Option } = Select;

const { Title } = Typography;

export default function AntAdditionaldetails({ location }) {
  console.table("i am here");
  console.table(location.state);

  const onFinish = (values) => {
    console.log("Success:");
    console.table(values);
    const user = { ...location.state, ...values };

    console.table(user);

    axios.post(`http://localhost:3000/users`, { user }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    alert(
      "registration completed , view your details in the user tab on the left"
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className="centerAdditional"
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
      <div
        style={{
          top: "-15%",
          left: "35%",
          position: "absolute",
          textAlign: "center",
        }}
      >
        {" "}
        <Title level={2}>Additional Info</Title>{" "}
      </div>
      <div style={{ top: "-5%", position: "absolute" }}>
        {" "}
        <Text
          italic
          style={
            {
              /*top:"10%"*/
              /* position:"absolute"}*/
            }
          }
        >
          Let us know more about you
        </Text>{" "}
      </div>
      <Form.Item
        label="Father's name"
        name="Fathersname"
        rules={[
          {
            required: true,
            message: "Please input your Father's name",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mother's name"
        name="Mothersname"
        rules={[
          {
            required: true,
            message: "Please input your Mother's name",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name="Age"
        rules={[
          {
            required: true,
            message: "Please input your Age",
          },
        ]}
      >
        <InputNumber min={1} max={120} initialValues={0} />
      </Form.Item>

      <Form.Item
        label="Department"
        name="Department"
        rules={[
          {
            required: true,
            message: "Please input your Department!",
          },
        ]}
      >
        <Select initialValues="IT" style={{ width: 200 }}>
          <Option disabled value>
            Select an Option
          </Option>
          <Option value="it">IT</Option>
          <Option value="cse">CSE</Option>
          <Option value="ece">ECE</Option>
          <Option value="mech">MECH</Option>
          <Option value="civil">CIVIL</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Gender"
        name="Gender"
        rules={[
          {
            required: true,
            message: "Please input your Gender",
          },
        ]}
      >
        <Radio.Group /*onChange={onChange}*/ /*value={value}*/>
          <Radio value="Male">Male</Radio>
          <Radio value="Female">Female</Radio>
          <Radio value="Others">Others</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="Address"
        name="Address"
        rules={[
          {
            required: true,
            message: "Please input your Address",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="pincode"
        name="pincode"
        rules={[
          {
            required: true,
            message: "Please input your pincode",
          },
        ]}
      >
        <InputNumber min={0} max={999999} initialValues={500017} />
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
          <Button htmlType="button">Next</Button>{" "}
        </Space>
      </Form.Item>
    </Form>
  );
}
