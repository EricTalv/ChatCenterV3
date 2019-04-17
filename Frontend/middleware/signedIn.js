export default function (context) {
    console.log(context);
    // If nuxt generate, pass this middleware
    if (context.isServer && !context.req) return
    if(!context.store.state.auth.token){
        context.redirect('/auth/login');
    }
}