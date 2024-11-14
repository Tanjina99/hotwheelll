import React from "react";
import { Button, Form, Input, Typography, Divider } from "antd";
import { MdEmail } from "react-icons/md";
import { GoogleOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import { CiLock } from "react-icons/ci";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";

const { Title } = Typography;

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Login successful:", values);
    toast.success("Login successful!");
  };

  const handleGoogleLogin = () => {
    toast.success("Logged in with Google!");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#f7f7f7",
        margin: 0,
      }}
    >
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: "1",
          backgroundColor: "#f7f7f7",
        }}
      >
        <div
          className="login-box"
          style={{
            width: "100%",
            maxWidth: "400px",
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <Title level={2} style={{ fontWeight: "600", marginBottom: "20px" }}>
            Sign In/Register
          </Title>
          <Form
            name="login-form"
            className="login-form"
            onFinish={onFinish}
            style={{
              width: "100%",
            }}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email is required",
                },
              ]}
              style={{ marginBottom: "20px" }}
            >
              <Input
                placeholder="Enter your email"
                prefix={<MdEmail style={{ color: "#1890ff" }} />}
                allowClear
                style={{
                  padding: "12px",
                  borderRadius: "4px",
                  border: "1px solid #d9d9d9",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Password is required",
                },
              ]}
              style={{ marginBottom: "30px" }}
            >
              <Input.Password
                placeholder="Enter your password"
                prefix={<CiLock />}
                style={{
                  padding: "12px",
                  borderRadius: "4px",
                  border: "1px solid #d9d9d9",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                }}
              />
            </Form.Item>
            <Form.Item style={{ marginBottom: "10px" }}>
              <Button
                type="primary"
                htmlType="submit"
                className="button-all"
                style={{
                  width: "40%",
                  padding: "15px",
                  borderRadius: "4px",
                  border: "none",
                  color: "#fff",
                  fontWeight: "600",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                Login
              </Button>
            </Form.Item>

            <Divider>OR</Divider>

            <Form.Item>
              <Button
                type="default"
                icon={<GoogleOutlined style={{ color: "#fff" }} />}
                onClick={handleGoogleLogin}
                className="button-all"
                style={{
                  width: "60%",
                  padding: "12px",
                  backgroundColor: "#DB4437",
                  borderRadius: "4px",
                  color: "#fff",
                  fontWeight: "600",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                Sign in with Google
              </Button>
            </Form.Item>

            <div
              className="extra-options"
              style={{
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              <Typography.Text>
                Don't have an account?{" "}
                <Typography.Link href="/register">Register now</Typography.Link>
              </Typography.Text>
              <br />
              <Typography.Text>
                Forgot your password?{" "}
                <Typography.Link href="/resetpassword">
                  Reset now
                </Typography.Link>
              </Typography.Text>
            </div>
          </Form>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default LoginPage;
