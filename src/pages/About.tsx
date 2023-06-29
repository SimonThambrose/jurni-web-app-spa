import React from "react";
import Header from "../components//Header/Header";
import {Col, Row} from "antd";
import Footer from "../components/Footer/Footer";
import Blogs from "../components/Blogs/Blogs";

const About: React.FC = () => {
    return (
        <>
            <Header activePage='/about'/>
            <div className='about'>
                <Row className='about-content'>
                    <Col className='about-content__element' offset='1' span='22'>
                        <Row className='about-content__element-introduction'>
                            <Col className='introduction-text' span='12'>
                                <h1 className='introduction-text-title'>A big title</h1>
                                <p className='introduction-text-body'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris vel sem
                                    sollicitudin dictum. Donec a nisl vehicula, pretium nisl ut, feugiat neque. Etiam
                                    tempus efficitur neque lacinia finibus. Vestibulum faucibus leo vel ex posuere, eu
                                    auctor leo mollis. Fusce quis lorem commodo lorem blandit molestie. In tincidunt
                                    ante nisi, vel tristique nisi semper a. Quisque erat arcu, eleifend non commodo id,
                                    vulputate sed augue.
                                    <br/><br/>
                                    Duis tincidunt rutrum magna, ut fermentum sapien. Sed congue nisl sed leo efficitur
                                    rutrum. Duis quis euismod est. Fusce sit amet nibh id ligula malesuada laoreet vitae
                                    ac neque. Morbi tristique sollicitudin erat, eget gravida ipsum sodales in. Sed
                                    auctor turpis vitae egestas porta. In efficitur sagittis luctus. Fusce vitae finibus
                                    felis, a bibendum felis. Quisque est nisl, rutrum sit amet ligula vel, imperdiet
                                    pellentesque mauris. Duis a nisi ac augue commodo efficitur in a neque.
                                    <br/><br/>
                                    Nullam condimentum et elit quis semper. Vestibulum vitae efficitur nibh. In mi
                                    tortor, tincidunt lobortis condimentum non, facilisis sed mauris. Donec bibendum mi
                                    eros, non lacinia metus posuere at. Vestibulum consequat dictum pretium.
                                </p>
                            </Col>
                            <Col className='introduction-image' offset='1' span='10'>
                                <img src="https://th.bing.com/th/id/OIP.EtD8SQVVH7iUnxm9dxqTLQHaE8?pid=ImgDet&rs=1" alt="About Jurni image"/>
                            </Col>
                        </Row>
                        <Row className='about-content__element-team'>
                            <Col className='team-title' span='24'>
                                <h1>The team</h1>
                            </Col>
                            <Col span='5'>
                                <img className='team-image' src="https://th.bing.com/th/id/OIP.EtD8SQVVH7iUnxm9dxqTLQHaE8?pid=ImgDet&rs=1" alt="Team member one"/>
                            </Col>
                            <Col offset='1' span='5'>
                                <img className='team-image' src="https://th.bing.com/th/id/OIP.EtD8SQVVH7iUnxm9dxqTLQHaE8?pid=ImgDet&rs=1" alt="Team member two"/>
                            </Col>
                            <Col offset='2' span='5'>
                                <img className='team-image' src="https://th.bing.com/th/id/OIP.EtD8SQVVH7iUnxm9dxqTLQHaE8?pid=ImgDet&rs=1" alt="Team member three"/>
                            </Col>
                            <Col offset='1' span='5'>
                                <img className='team-image' src="https://th.bing.com/th/id/OIP.EtD8SQVVH7iUnxm9dxqTLQHaE8?pid=ImgDet&rs=1" alt="Team member four"/>
                            </Col>
                        </Row>
                        <Row className='about-content__element-blogs' data-cy='about-blogs'>
                            <Col className='blogs-title' span='24'>
                                <h1>Blogs</h1>
                            </Col>
                            <Blogs/>
                        </Row>
                    </Col>
                </Row>
            </div>
            <Footer/>
        </>
    )
}

export default About