import React from "react";
import Header from "../../components/Header/Header";
import {Col, Row} from "antd";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Login: React.FC = () => {
    return (
        <>
            <Header activePage=''/>
            <div className='register'>
                <Row className='register-content'>
                    <Col className='register-content__element'>
                        <RegisterForm/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Login