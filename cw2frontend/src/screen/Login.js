import { useState } from 'react';
import { Form, Input, Button, message, Select } from 'antd';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

const { Option } = Select;

const API_URL = 'https://cw2backend.tommyleong1.repl.co';

interface LoginFormValues {
  username: string;
  password: string;
  role: string;
}

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values: LoginFormValues) => {
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/login`, values);
      localStorage.setItem('token', response.data.token);
      message.success('Login successful');
    } catch (error) {
      message.success('Login successful');
      <Route exact path="/" element={<Home />} />
    }

    setLoading(false);
  };

  return (
    <Form onFinish={handleLogin}>
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: 'Please enter your username' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="role"
        label="Role"
        rules={[{ required: true, message: 'Please select your role' }]}
      >
        <Select>
          <Option value="admin">Admin</Option>
          <Option value="employee">Employee</Option>
          <Option value="user">User</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;