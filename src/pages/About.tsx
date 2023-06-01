import React, {useEffect, useState} from "react";
import {BlogValues} from "../Models";
import {fetchAllBlogs} from "../fetchers/BlogFetch";
import Header from "../components//Header/Header";
import {Col, Row} from "antd";
import Footer from "../components/Footer/Footer";

const About: React.FC = () => {
    const [blogData, setBlogData] = useState<BlogValues[]>([]);

    const getBlogData = async () => {
        const blogValueData: BlogValues[] = await fetchAllBlogs().catch((error) => {
            console.log(error);
        });

        setBlogData(blogValueData);
    }

    useEffect(() => {
        getBlogData();
    }, []);

    return (
        <>
            <Header activePage='/about'/>
            <div className='about'>
                <Row className='about-content'>
                    <Col className='about-content__element' offset='1' span='22'>
                        <div className='about-content__element-blogs' data-cy='about-blogs'>
                            {blogData.map(value =>
                                <p>{`${value.title}: ${value.description}`}</p>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer/>
        </>
    )
}

export default About