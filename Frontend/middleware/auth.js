export default function (context) {
    console.log(context);
    // If nuxt generate, pass this middleware
    if (context.isServer && !context.req) return
    if(!context.isServer) {
        let token = window.localStorage.getItem('token');
        if(token){
            context.store.dispatch('auth/setToken', token);
        }
    }
}