<template>
    <div v-on:scroll="scroll(e)" class="container">
        <h1 class="text-center">Index</h1>
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
            console.log(this);
            console.log()
        },

        created() {
            // Perform dispatch to retrieveData from Store
            this.dispatchAction('retrieveData');
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll(event) {

                let clientMaxHeight = this.$el.clientHeight;
                let clientCurrentHeight = event.pageY + window.innerHeight;

                let percent = Math.round((clientCurrentHeight / clientMaxHeight) * 100);
                console.log(percent);

                if (percent >= 89 ) {
                    this.dispatchAction('getNextPage');
                }
            }
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



