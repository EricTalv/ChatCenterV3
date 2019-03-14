<template>
    <div class="container">
        <post v-show="!$store.state.isLoading"
        v-for="item in Contents"
        :content="item"
        :key="item.id"
        ></post>
        <div v-show="$store.state.isLoading">loading ...</div>
    </div>
</template>

<script>

    import post from '~/components/post.vue'

    export default {

        components: {
            post
        },

        mounted() {
        },

        created() {
            // Perform dispatch to retrieveData from Store
            this.dispatchAction('retrieveData');
        },

        computed: {

            // Perform our dispatch action SHORTHAND
            dispatchAction() {
                return this.$store.dispatch;
            },

            // Retrieve any data stored in Contents.State
            Contents() {
                return this.$store.state.contents;
            }
        }

    }
</script>


<style scoped>

</style>



