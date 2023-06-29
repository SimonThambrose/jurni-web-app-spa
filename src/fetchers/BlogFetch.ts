import axios from "axios";

export const fetchAllBlogs = async () => {
    try {
        const response = await axios.get('/api/blog/getAllBlogs').catch((error) => {
            throw (error.response.status);
        });
        return response.data;
    } catch (error) {
        return [];
    }
};

export const likeBlog = async (blogId: number) => {
    try {
        const response = await axios.put(`/api/blog/${blogId}/like`).catch((error) => {
            throw (error.response.status);
        });
        return response.data;
    } catch (error) {
        return [];
    }
};