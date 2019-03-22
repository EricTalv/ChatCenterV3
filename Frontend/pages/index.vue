<template>
    <div class="container">
        <inf_scroll>
            <h1 class="text-center">Index</h1>
            <post
                    v-for="item in Contents"
                    :content="item"
                    :key="item.id"
            ></post>

            <div class="et-Footer" v-show="$store.state.isLoading">
                <div class="loader"></div>
            </div>
        </inf_scroll>
    </div>
</template>

<script>

    import post from '../components/post';
    import inf_scroll from '../components/infScroll';

    export default {

        // Retrieve components
        name: "index",
        components: {post, inf_scroll},

        // After all data has been received and rendered
        created() {
            // Perform dispatch to retrieveData from Store
            this.$store.dispatch('retrieveData');
        },

        // Computes any changes
        computed: {
            // Retrieve any data stored in Contents.State
            Contents() {
                return this.$store.state.contents;
            }
        }
    }
</script>

<style scoped>

</style>



