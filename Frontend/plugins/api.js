import axios from 'axios';
export default ({ app }, inject) => {
    inject('api', axios.create({
        baseURL: 'http://192.168.99.100:8080/api/',
    }))
}