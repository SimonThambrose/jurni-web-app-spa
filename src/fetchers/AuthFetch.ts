import axios from "axios";

export const fetchUser = async (email: string, password: string) => {
    try {
        const response = await axios.get('/api/user/getUser?email=' + email + '&password=' + password).catch((error) => {
            throw (error.response.status);
        });

        // TODO: Create JWT token
        return response.data;
    } catch (error) {
        // TODO: Return error message to user
        return null;
    }
};

export const registerUser = async (firstName: string, lastName: string, email: string, password: string) => {
    try {
        const response = await axios.post('/api/user/createUser', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }).catch((error) => {
            throw (error.response.status);
        });

        return response.data;
    } catch (error) {
        return null;
    }
}