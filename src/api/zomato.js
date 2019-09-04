import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers:{
        'user-key': 'd641f96ce9996d4d0c4ee4411f2993a1'
    }
});