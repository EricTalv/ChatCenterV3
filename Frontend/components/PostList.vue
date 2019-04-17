<template>
    <inf_scroll>
        <post v-for="item in Contents"
              :content="item"
              :key="item.id"
        ></post>
        <div class="et-Footer" v-show="$store.state.posts.isLoading">
            <div class="loader"></div>
        </div>
    </inf_scroll>
</template>

<script>

    import post from '../components/Post';
    import inf_scroll from '../components/InfScroll';

    export default {
        name: "PostList",
        components: {post, inf_scroll},

        data() {
            return {
                model: 'posts'
            }
        },

        // After all data has been received and rendered
        created() {
            // Perform dispatch to retrieveData from Store
            this.$store.dispatch('posts/retrieveData');
        },

        // Computes any changes
        computed: {
            // Retrieve any data stored in Contents.State
            Contents() {
                return this.$store.state.posts.contents;
            }
        }
    }
</script>

<style scoped>

</style>