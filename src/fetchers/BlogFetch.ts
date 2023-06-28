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