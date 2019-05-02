<template>
    <div class="container">
        <inf_scroll>
            <h1 class="text-center">Admin</h1>

            <admin_post
                    v-for="item in Contents"
                    :content="item"
                    :key="item.id"
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

        created() {
            this.$store.dispatch('posts/retrieveData')
        },

        computed: {

            Contents() {
                // Return any new data from the Content State
                return this.$store.state.posts.contents;
            },

            ModalData () {
                // Send Currently opened Post data to CurrentlyOpenPost state

            }
        }

    }
</script>

<style scoped>

</style>