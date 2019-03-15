<template>
    <div v-scroll="handleScroll" class="container">
        <h1 class="text-center">Index</h1>
        <post
                v-for="item in Contents"
                :content="item"
                :key="item.id"
        ></post>

        <div class="et-Footer" v-show="$store.state.isLoading">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script>

    import post from '~/components/post.vue';

    export default {

        // Retrieve components
        name: "index",
        components: {
            post
        },

        // After all data has been received and rendered
        created() {
            // Perform dispatch to retrieveData from Store
            this.$store.dispatch('retrieveData');
        },

        methods: {
            handleScroll(event) {
                // Define variables
                let clientMaxHeight = this.$el.clientHeight; // Get full height of the site
                let clientCurrentHeight = event.pageY + window.innerHeight; // See clients current web-height

                // Calculations
                let percent = Math.round((clientCurrentHeight / clientMaxHeight) * 100); // Calculate the percentage of the height number

                // Checks
                if (percent >= 89) { // Check when we see 89% of the page
                    this.$store.dispatch('getNextPage'); // run dispatch
                }
            }
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

    .et-Footer {

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
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>



