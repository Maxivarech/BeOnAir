import axios from 'axios';
const baseUrl = 'http://localhost:3001/photos';

const getPhotos = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getPhotos };