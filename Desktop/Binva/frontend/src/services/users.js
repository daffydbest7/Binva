import axios from "axios";

export const login = async ({ email, password}) => {
    try {
        const {data} = await axios.post('/api/v1/login', {
            email,
            password,
        })
        return data;
    }catch(error){
        if(error.response && error.response.data.message)
         throw new Error(error.response.data.message);
        throw new Error(error.message); 
    }
}
export const getLoggedInUser = async ({token}) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const {data} = await axios.get('/api/v1/getloginuser', config);
        return data;
    }catch(error){
        if(error.response && error.response.data.message)
         throw new Error(error.response.data.message);
        throw new Error(error.message); 
    }
}


