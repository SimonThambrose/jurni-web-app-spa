import React, {useEffect, useState} from "react";
import {BlogValues} from "../../Models";
import {fetchAllBlogs, likeBlog} from "../../fetchers/BlogFetch";
import {Button, Card, Col} from "antd";
import Meta from "antd/es/card/Meta";
import './Blogs.css';

const Blogs: React.FC = () => {
    const [blogData, setBlogData] = useState<BlogValues[]>([]);

    const getBlogData = async () => {
        const blogValueData: BlogValues[] = await fetchAllBlogs().catch((error) => {
            console.log(error);
        });

        setBlogData(blogValueData);
    }

    useEffect(() => {
        const interval = setInterval(async () => {
            await getBlogData();
        }, 500);
        return () => clearInterval(interval);
    }, [])

    return (
        <>
            {blogData.map((blog, index) =>
                <Col className='blog' offset={index % 2 === 0 ? 0 : 2} span='11'>
                    <Card className='blog-card'>
                        <Meta title={blog.title} description={blog.description}/>
                        <Button className='blog-card-button' type='default' onClick={() => likeBlog(blog.id)}>Like ({blog.likes})</Button>
                    </Card>
                </Col>
            )}
        </>
    )
}

export default Blogs;