<template>
    <div v-on:scroll="scroll(e)" class="container">
        <h1 class="text-center">Index</h1>
        <post
              v-for="item in Contents"
              :content="item"
              :key="item.id"
        ></post>
        <div class="et-Footer" v-show="$store.state.isLoading"><div class="loader"></div></div>
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

    .et-Footer{

    }
    .loader {
        margin: 5% auto;
        border: 10px solid #f3f3f3; /* Light grey */
        border-top: 10px solid grey; /* Blue */
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 0.5s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>



