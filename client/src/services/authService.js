import axios from 'axios';

export const register =async(userData)=>{
    return await axios.post(`http://localhost:3000/api/register`,userData);

};