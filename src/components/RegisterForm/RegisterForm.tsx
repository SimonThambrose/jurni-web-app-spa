import React, {useState} from "react";
import {Button, Form, Input, message} from "antd";
import './RegisterForm.css'
import {Link} from "react-router-dom";
import {registerUser} from "../../fetchers/AuthFetch";

const RegisterForm: React.FC = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e: React.FormEvent) => {
        let response = await registerUser(firstName, lastName, email, password);

        if (response === null) {
            messageApi.open({
                type: 'error',
                content: 'Something went wrong! Please try again.'
            });
        } else {
            window.history.back();
        }
    };

    return (
        <Form className='register-content__element-form' onFinish={handleSubmit}>
            {contextHolder}
            <Form.Item
                className='register-form-first-name'
                label="First name"
                name="first-name"
                rules={[{required: true, message: 'Please enter your first name!'}]}>
                <Input placeholder="John" onChange={e => setFirstName(e.target.value)}/>
            </Form.Item>
            <Form.Item
                className='register-form-last-name'
                label="Last name"
                name="last-name"
                rules={[{required: true, message: 'Please enter your last name!'}]}>
                <Input placeholder="Doe" onChange={e => setLastName(e.target.value)}/>
            </Form.Item>
            <Form.Item
                className='register-form-email'
                label="Email"
                name="email"
                rules={[{required: true, message: 'Please enter your email!'}]}>
                <Input placeholder="john.doe@email.com" onChange={e => setEmail(e.target.value)}/>
            </Form.Item>
            <Form.Item
                className='register-form-email-confirm'
                label="Confirm email"
                name="confirm-email"
                rules={[{required: true, message: 'Please confirm your email!'}]}>
                {/* TODO: Validate email */}
                <Input placeholder="john.doe@email.com"/>
            </Form.Item>
            <Form.Item
                className='register-form-password'
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please enter your password!'}]}>
                <Input.Password placeholder="John'sVerySafePassw0rd!" onChange={e => setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item
                className='register-form-password-confirm'
                label="Confirm password"
                name="confirm-password"
                rules={[{required: true, message: 'Please confirm your password!'}]}>
                {/* TODO: Validate password */}
                <Input.Password placeholder="John'sVerySafePassw0rd!"/>
            </Form.Item>
            <Form.Item className='register-form-email'>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
            <Link to='/login' className='login'>Already have an account? Log in here.</Link>
        </Form>
    )
}

export default RegisterForm