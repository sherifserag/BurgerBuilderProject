import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-4ca3f-default-rtdb.firebaseio.com/'
});

export default instance;