<template>
    <div class="container">
        <inf_scroll>
            <h1 class="text-center">Admin</h1>

            <admin_post

            ></admin_post>

            <div class="et-Footer" v-show="$store.state.isLoading">
                <div class="loader"></div>
            </div>
        </inf_scroll>

    </div>
</template>

<script>

    import admin_post from "../components/AdminPost";
    import inf_scroll from "../components/InfScroll";

    export default {
        name: "admin",
        components: {admin_post, inf_scroll},



    }
</script>

<style scoped>

</style>