import axios from 'axios';
import ServiceContainer from "../services/serviceContainer";

/*
export default ({ app }, inject) => {
    inject('api', axios.create({
        baseURL: 'http://192.168.99.100:8080/api/',
    }))
}*/

export default ({ app }, inject) => {
    inject('api', new ServiceContainer(app.$axios));
    app.$axios.interceptors.request.use((config) => {
        if (app.$echo.socketId()) {
            config.headers['X-Socket-Id'] = app.$echo.socketId();
        }
        return config;
    });
    app.$axios.interceptors.response.use((response) => {
        if(response.data.status && response.data.status === "Token is Expired"){
            app.store.dispatch('auth/refresh');
            return app.$axios.$request(response.config);
        } else {
            return response;
        }
    }, (error) => {
        console.log(error);
        // Do something with response error
        return Promise.reject(error);
    });
}