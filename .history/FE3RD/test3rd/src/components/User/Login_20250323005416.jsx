// Login.js
import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./fontend/login.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const onFinish = async (values) => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/auth/login",
  //       {
  //         email: values.email,
  //         password: values.password,
  //       }
  //     );

  //     if (response.data.success) {
  //       // Lưu token vào localStorage
  //       localStorage.setItem("token", response.data.token);

  //       message.success("Login successful!");

  //       // Chuyển hướng đến homepage với thông tin user
  //       navigate("/user/homepage", {
  //         state: {
  //           userEmail: response.data.userEmail,
  //           userxu: response.data.userxu,
  //         },
  //       });
  //     } else {
  //       message.error(response.data.message || "Login failed");
  //     }
  //   } catch (error) {
  //     console.error("Login error:", error);
  //     message.error(error.response?.data?.message || "Login failed");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://demcalo.onrender.com/api/auth/login",
        {
          email: values.email,
          password: values.password,
        }
      );

      if (response.data.success) {
        // Lưu token và roleId
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("roleId", response.data.roleId);

        message.success("Login successful!");

        // Điều hướng dựa trên roleId
        if (response.data.roleId === 1) {
          navigate("/admin/dashboard"); // Admin
        } else if (response.data.roleId === 2) {
          navigate("/user/homepage"); // User
        } else {
          message.error("Unknown role. Contact support.");
        }
      } else {
        message.error(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      message.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="form-container">
          <h1>
            Welcome Back
            <span aria-label="wave" role="img">
              {" "}
              👋{" "}
            </span>
          </h1>
          <p>
            Today is a new day. It your day. You shape it. Sign in to start
            managing your projects.
          </p>
          <Form name="login" onFinish={onFinish} layout="vertical">
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Please enter a valid email!",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                className="w-full"
              >
                Log in
              </Button>
            </Form.Item>
            <div className="form-container">
              <Link to="/user/resetpassword">Forgot Password?</Link>
            </div>
            <div className="footerlogin">
              <div className="text-center">
                <Button type="link" onClick={() => navigate("/register")}>
                  Dont have an account? Register
                </Button>
              </div>
              <p>© 2024 ALL RIGHTS RESERVED</p>
            </div>
          </Form>
        </div>

      </div>
    </div>
  );
};

export default Login;
