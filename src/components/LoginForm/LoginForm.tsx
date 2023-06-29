import React, {useState} from "react";
import {Button, Form, Input, message} from "antd";
import './LoginForm.css'
import {fetchUser} from "../../fetchers/AuthFetch";
import {Link} from "react-router-dom";

const LoginForm: React.FC = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        let response = await fetchUser(email, password);
        if (response === null) {
            messageApi.open({
                type: 'error',
                content: 'Email or password is incorrect!'
            });
        } else {
            window.history.back();
        }
    };

    return (
        <Form className='login-content__element-form' onFinish={handleSubmit}>
            {contextHolder}
            <Form.Item
                className='login-form-email'
                label="Email"
                name="email"
                rules={[{required: true, message: 'Please enter your email!'}]}>
                <Input placeholder="john.doe@email.com" onChange={e => setEmail(e.target.value)}/>
            </Form.Item>
            <Form.Item
                className='login-form-password'
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please enter your password!'}]}>
                <Input.Password placeholder="John'sVerySafePassw0rd!" onChange={e => setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item className='login-form-email'>
                <Button type="primary" htmlType="submit">
                    Log in
                </Button>
            </Form.Item>
            <Link to='/register' className='register'>Don't have an account? Register here.</Link>
        </Form>
    )
}

export default LoginForm