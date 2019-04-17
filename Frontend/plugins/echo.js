import Echo from "laravel-echo"
window.Pusher = require('pusher-js');
export default ({ app }, inject) => {
    inject('echo', new Echo({
        broadcaster: 'pusher',
        key: '',
        cluster: 'eu',
        encrypted: true
    }));
}