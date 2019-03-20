<template>
    <div v-scroll="handleScroll" class="container">
        <h1 class="text-center">Admin</h1>
        <admin_post
                v-for="item in Contents"
                :content="item"
                :key="item.id"
        ></admin_post>

        <div class="et-Footer" v-show="$store.state.isLoading">
            <div class="loader"></div>
        </div>
    </div>
</template>


<script>


    import Admin_post from "../components/adminPost";

    export default {
        name: "admin",
        components: {Admin_post},

        created() {
            this.$store.dispatch('retrieveData')
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

        computed: {
            Contents() {
                return this.$store.state.contents;
            }
        }

    }
</script>

<style scoped>

</style>