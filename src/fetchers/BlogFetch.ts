import axios from "axios";
import {BlogValues} from "../Models";

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